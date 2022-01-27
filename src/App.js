import react, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Component/Pages/Home';
import PageWrapper from './Component/PageWrapper';

class App extends Component{
  render(){
    return (
      <PageWrapper>
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </Router>
      </PageWrapper>
    );
  }
}

export default App;