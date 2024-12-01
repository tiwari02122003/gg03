// import pool from '@/utils/db';

// export async function POST(req) {
//   try {
//     const data = await req.json();
//     const { id,item_name, description,category, amount,  availability, photo } = data;

//     const query = `
//       INSERT INTO menu (id,item_name, description, category, amount, availability, photo)
//       VALUES (?, ?, ?, ?, ?, ?, ?)
//     `;

//     await pool.query(query, [id,item_name, description, category, amount, availability, photo ]);

//     return new Response(JSON.stringify({ message: 'Product added successfully!' }), { status: 200 });
//   } catch (error) {
//     console.error('Error adding product:', error);
//     return new Response(JSON.stringify({ error: 'Failed to add product.' }), { status: 500 });
//   }
// }

import db from '@/utils/db'; // Adjust the import path to your actual file

export async function POST(req) {
  try {
    const data = await req.json();
    const { id, item_name, description, category, amount, availability, photo } = data;

    const query = `
      INSERT INTO menu (id, item_name, description, category, amount, availability, photo)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    // Use the connection pool to execute the query
    const [result] = await db.query(query, [
      id, item_name, description, category, amount, availability, photo,
    ]);

    return new Response(JSON.stringify({ message: 'Product added successfully!', result }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error in API route:', error);
    return new Response(JSON.stringify({ error: 'Failed to add product.' }), {
      status: 500,
    });
  }
}
