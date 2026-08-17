const { Pool } = require('pg');

const dbUrl =
  process.env.DATABASE_URL ||
  process.env.DATABASE_URI ||
  process.env.POSTGRES_URL ||
  '';

console.log('Testing connection to database...');

const pool = new Pool({
  connectionString: dbUrl,
  ssl: { rejectUnauthorized: false },
});

async function main() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connected successfully! Time:', res.rows[0].now);
  } catch (err) {
    console.error('Database connection failed:', err.message);
  } finally {
    await pool.end();
  }
}

main();
