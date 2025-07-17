const express = require('express');
const router = express.Router();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body || req.query;

    const [existing] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
        return res.status(400).json({ message: 'Email já cadastrado' });
    }

    const hashedPassword = await bycrypt.hash(password, 10);
    await db.execute(
        'INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, NOW())',
        [name, email, hashedPassword]
    );

    res.json({ message: 'Usuário registrado com sucesso' });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body || req.query;

    const [users] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    const user = users[0] ?? null;
    if (user == null) {
        return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    await db.execute('UPDATE users SET last_login = NOW() WHERE id = ?', [user.id]);

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, name: user.name });
});

module.exports = router;