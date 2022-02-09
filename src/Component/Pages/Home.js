import React, {Component} from 'react';
//Re-usable components
import Header from '../Common/Header';
import Services from '../Common/Services';
import Portfolio  from '../Common/Portfolio';
//background image
import image from '../assets/img/Image';

class Home extends Component{
    render(){
        return (
            <div style={{backgroundImage:image}}>
                <Header 
                    title="Welcome to our studio"
                    subtitle="It's nice to meet you"
                    buttonText="Welcome"
                    image={image}
                    link="/services"
                    showButton={true}
                />
                <Services/>
                <Portfolio/>
            </div>
        );
    }
}

export default Home;