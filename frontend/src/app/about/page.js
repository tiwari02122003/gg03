import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="p-8 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
        <p className="text-center text-gray-700">We provide healthy and delicious meals delivered fresh to your door.</p>
      </section>
      <Footer />
    </div>
  );
};

export default About;

