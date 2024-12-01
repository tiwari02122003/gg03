'use client';

import * as React from "react";

export default function About() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/3d/46/4d/3d464d60a056f42833d519dde1cc5bd3.jpg')`, // Replace with the actual image path
      }}
    >
      <div className="text-center max-w-2xl bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4 text-green-500">About Us</h1>
        <p className="text-lg mb-6 leading-relaxed text-gray-300">
          Welcome to our platform, where health meets convenience! We are
          committed to delivering the freshest, healthiest meals directly to your
          doorstep. Our mission is to inspire and empower a healthier lifestyle
          with balanced nutrition and a touch of gourmet delight.
        </p>
        <p className="text-md text-gray-400">
          Whether you're starting your fitness journey or simply want to enjoy
          nutritious, delicious meals, we're here for you. Explore our journey
          and join us in making healthy living an effortless experience.
        </p>
      </div>
    </section>
  );
}