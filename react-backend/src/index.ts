import sqlite3, { Database } from 'sqlite3'
import { open } from 'sqlite'
import path from 'path'
const express = require('express')
const app = express();

let db: any

(async () => {
    db = await open({
      filename: path.resolve(__dirname, '../database/database.db'),
      driver: sqlite3.Database
    })
 
})()

app.listen(3000, () => 
console.log('Servidor iniciado na porta 3000')
);

app.get('/', async (req:any, res: any) => {
    const result = await db.all('select * from usuarios') 
    res.json(result)
})

app.get('/:id', async (req:any,  res: any) => {
    const result = await db.get('SELECT * from usuarios where ID = ?', req.params.id)
    res.json(result)
})