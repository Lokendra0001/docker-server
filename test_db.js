import pg from 'pg';
import "dotenv/config";

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL;

console.log("Connecting to:", connectionString);

const pool = new Pool({ connectionString });

try {
    const res = await pool.query('SELECT NOW()');
    console.log("Connection successful:", res.rows[0]);
} catch (err) {
    console.error("Connection failed:", err.message);
} finally {
    await pool.end();
}
