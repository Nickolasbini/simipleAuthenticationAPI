const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);


const PORT = parseInt(process.env.PORT || 3000);
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));