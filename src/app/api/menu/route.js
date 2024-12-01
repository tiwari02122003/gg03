import db from '@/utils/db';

// export async function GET(req) {
//   return new Promise((resolve) => {
//     db.query('SELECT * FROM menu', (err, results) => {
//       if (err) {
//         console.error("Database error:", err);
//         resolve(new Response(JSON.stringify({ error: err.message }), { status: 500 }));
//       } else {
//         console.log("Database query results:", results);
//         resolve(new Response(JSON.stringify(results), { status: 200 }));
//       }
//     });
//   });
// }
export async function GET(req) {
  console.log("API Request received for /api/menu");
  try {
    const [results] = await db.query("SELECT * FROM menu");
    // console.log("Database query successful:", results);
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.error("Detailed error info:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500 }
    );
  }
}





export async function POST(req) {
  const { id,item_name, description, category, amount, availability, photo } = await req.json();

  if (!item_name || !description || !category|| amount == null || availability == null || !photo) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
  }

  return new Promise((resolve) => {
    db.query(
      'INSERT INTO menu (id,item_name, description, category, amount, availability, photo) VALUES (?, ?, ?, ?, ?, ?)',
      [id,item_name, description, category, amount, availability, photo],
      (err) => {
        if (err) {
          resolve(new Response(JSON.stringify({ error: err.message }), { status: 500 }));
        } else {
          resolve(new Response(JSON.stringify({ message: 'Menu item added successfully' }), { status: 201 }));
        }
      }
    );
  });
}
