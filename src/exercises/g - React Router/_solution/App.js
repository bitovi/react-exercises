import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function About() {
  return <div>About</div>;
}

function Home() {
  return <div>Home</div>;
}

function Header() {
  return (
    <>
      <Link to="/home" style={{ marginRight: '5px' }}>
        Home
      </Link>
      <Link to="/about">About</Link>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
      </BrowserRouter>
    </>
  );
}

export default App;
