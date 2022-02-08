import react, {Component} from 'react';
//Pages
import Header from '../Common/Header';
import Services from '../Common/Services';

import image from '../assets/img/Image';

class Home extends Component{
    render(){
        return (
            <div>
                <Header 
                    title="Welcome to our studio"
                    subtitle="It's nice to meet you"
                    buttonText="Welcome"
                    image={image}
                    link="/services"
                    showButton={true}
                />
                <Services/>
            </div>
        );
    }
}

export default Home;