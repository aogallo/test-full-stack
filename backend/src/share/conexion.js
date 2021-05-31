const { Pool } = require('pg');
const { config } = require('../secret/pg');
const pool = new Pool (config);

exports.query = async(command, paramteres) => {
    const client = await pool.connect();
    const res = await client.query(command,paramteres);
    await client.release();
    return res.rows;
}