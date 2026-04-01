"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
const path_1 = __importDefault(require("path"));
const express = require('express');
const app = express();
let db;
(async () => {
    db = await (0, sqlite_1.open)({
        filename: path_1.default.resolve(__dirname, '../database/database.db'),
        driver: sqlite3_1.default.Database
    });
})();
app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));
app.get('/', async (req, res) => {
    const result = await db.all('select * from usuarios');
    res.json(result);
});
app.get('/:id', async (req, res) => {
    const result = await db.get('SELECT * from usuarios where ID = ?', req.params.id);
    res.json(result);
});
//# sourceMappingURL=index.js.map