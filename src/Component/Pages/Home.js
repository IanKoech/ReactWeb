import react, {Component} from 'react';
import Header from '../Common/Header';
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
            </div>
        );
    }
}

export default Home;