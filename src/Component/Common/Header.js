import react,{Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return (
            <div>
                <header class="masthead">
                    <div class="container">
                        <div class="masthead-subheading">{this.props.title}</div>
                        <div class="masthead-heading text-uppercase">{this.props.subtitle}</div>
                        <Link class="btn btn-primary btn-xl text-uppercase" href="#services">{this.props.link}</Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;