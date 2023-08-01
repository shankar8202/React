// import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link,  useSearchParams } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact?sub=general">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('sub');

  return (
    <div>
      <h2>Contact</h2>
      <p>Subject: {subject}</p>
    </div>
  );
};

export default App;
