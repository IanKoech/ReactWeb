import react, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

//Pages
import PageWrapper from './Component/PageWrapper';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Services from './Component/Common/Services';

class App extends Component{
  render(){
    return (
      <Router>
        <PageWrapper>
          <Routes>
            <Route exact={true} path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
          </Routes>
        </PageWrapper>
      </Router>
    );
  }
}


export default App;