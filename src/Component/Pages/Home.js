import react, {Component} from 'react';
import Header from '../Common/Header';


class Home extends Component{
    render(){
        return (
            <div>
                <Header 
                    title="Welcome to our studio"
                    subtitle="It's nice to meet you"
                    buttonText="Welcome"
                    link="img/header-bg.jpg"
                />
            </div>
        );
    }
}

export default Home;