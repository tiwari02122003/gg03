'use client';
import { useState } from 'react';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    id:'',
    item_name: '',
    description: '',
    category: '',
    amount: '',
    availability: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Product added successfully!');
        setFormData({
          id:'',
          item_name: '',
          description: '',
          category: '',
          amount: '',
          availability: '',
          photo: '',
        });
      } else {
        const { error } = await res.json();
        alert(`Error: ${error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to add product.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['id','item_name', 'description', 'category', 'amount',  'availability', 'photo'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium capitalize" htmlFor={field}>
              {field}
            </label>
            <input
              type="text"
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};


