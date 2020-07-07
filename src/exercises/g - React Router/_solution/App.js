/*
In this exercise you are going to use react-router-dom to 
create an App that renders the About component when you
go to "/about", and the Home component when you go to 
"/home".

The page should also contain two react-router-dom links
to use to navigate between the pages.

How would you add a 404 page that matches any route that isn't either / or /about?

*/

import React from 'react';

function About() {
  return <div>About</div>;
}

function Home() {
  return <div>Home</div>;
}

function App() {
  return <div />;
}

export default App;
