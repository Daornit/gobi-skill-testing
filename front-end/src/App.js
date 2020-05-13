import React from 'react';
import Header from './components/partials/HeaderV1';
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
      <DetailableSection name={'Эмэгтэй'}/>
      <DetailableSection name={'Эрэгтэй'}/>
      <Post/>
      <ScrollableSection/>
      <Footer/>
    </div>
  );
}

export default App;
