import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/produtos", async (req, res) => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "localhost",
            user: process.env.dbuser ? process.env.dbuser : "root",
            password: process.env.dbpassword ? process.env.dbpassword : "",
            database: process.env.dbname ? process.env.dbname : "banco1022a",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });
        const [result] = await connection.query("SELECT * FROM produtos");
        await connection.end();
        res.send(result);
    } catch (e) {
        console.error(e); // Log do erro para depuração
        res.status(500).send("Server ERROR");
    }
});

// Rota para listar usuários
app.get("/usuarios", async (req, res) => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "localhost",
            user: process.env.dbuser ? process.env.dbuser : "root",
            password: process.env.dbpassword ? process.env.dbpassword : "",
            database: process.env.dbname ? process.env.dbname : "banco1022a",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });
        const [result] = await connection.query("SELECT * FROM usuarios");
        await connection.end();
        res.send(result);
    } catch (e) {
        console.error(e); // Log do erro para depuração
        res.status(500).send("Server ERROR");
    }
});

app.listen(8000, () => {
    console.log("Iniciei o servidor");
});
