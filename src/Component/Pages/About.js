import React,{Component} from 'react';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

class About extends Component{
    render(){
        return (
            <div>
                <Header 
                  title="About us"
                  subtitle="It's a really great story"
                  showButton={false}
                  image={image}
                />
                <Timeline/>
                <Team/>
            </div>
        )
    }
}

export default About;