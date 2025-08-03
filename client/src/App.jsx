// src/App.js
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Experts from './pages/Experts';
import Blog from './pages/Blog'; 
import Contact from './pages/Contact';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Appointment from './pages/Appointment'; 

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
