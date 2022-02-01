import react,{Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return (
            <div>
                <header class="masthead" style={{backgroundImage : 'url("' +this.props.image + '")'}}>
                    <div class="container">
                        <div class="masthead-subheading">{this.props.title}</div>
                        <div class="masthead-heading text-uppercase">{this.props.subtitle}</div>
                        {this.props.showButton && 
                            <Link class="btn btn-primary btn-xl text-uppercase" to={this.props.link}>{this.props.buttonText}</Link>
                        }
                        
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;