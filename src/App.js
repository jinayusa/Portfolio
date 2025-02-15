import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home';
import About from './components/AboutMe';
import Projects from './components/projects';
import Contact from './components/contact';
import Header from './components/header';
import WelcomePage from './components/WelcomePage'; // Import WelcomePage

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {showWelcome ? (
          <WelcomePage /> // Render WelcomePage
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              {/* Redirect to home if path doesn't match */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;