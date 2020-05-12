import React from 'react';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Hero from './components/Hero';
import TopFivePost from './components/TopFivePost';
import DetailableSection from './components/DetailableSection';
import Post from './components/Post';
import ScrollableSection from './components/ScrollableSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <TopFivePost/>
      <DetailableSection/>
      <DetailableSection/>
      <Post/>
      <ScrollableSection/>
      <Footer/>
    </div>
  );
}

export default App;
