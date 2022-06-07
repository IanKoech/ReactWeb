import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Pages
import PageWrapper from './Component/PageWrapper';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Services from './Component/Common/Services';
import Portfolio from './Component/Common/Portfolio';
import Team from './Component/Common/Team';
import Contact from './Component/Pages/Contact';


class App extends Component{
  render(){
    return (
      <Router>
        <PageWrapper>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </PageWrapper>
      </Router>
    );
  }
}


export default App;