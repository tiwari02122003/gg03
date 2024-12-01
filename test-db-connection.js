import db from './src/utils/db.js';




async function testDB() {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS solution");
    console.log("Database connection successful. Test query result:", rows);
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

testDB();

