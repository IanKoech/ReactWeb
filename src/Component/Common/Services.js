import React, {Component} from 'react';
import SingleService  from './SingleService';

const services = [
    {title:'E-commerce', description:'We develop strategies for our partners on ways of scaling their e-commerce platforms', icon:'fa-shopping-cart'},
    {title:'Responsive design', description:'Developing intuitive and mobile first applications is our forte', icon:'fa-laptop'},
    {title:'Web Security', description:'Get in touch with us for real time security monitoring, protection, keeping servers up to date and encryption', icon:'fa-lock'}
]



class Services extends Component{
    render(){
        return (
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Some of the services we offer</h3>
                    </div>
                    <div className="row text-center">
                        {services.map((service, index) => {
                            return (<SingleService {...service} key={index}/>)
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;