import './globals.css';

export const metadata = {
  title: 'Grainly Giggles | Healthy Food Delivery',
  description: 'Fresh and healthy food delivered to your doorstep.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
