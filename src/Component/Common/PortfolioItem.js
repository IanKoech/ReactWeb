import React, {Component} from 'react';
import image from '../assets/img/portfolio/1.jpg';
import image2 from '../assets/img/portfolio/2.jpg';

class PortfolioItem extends Component{
    render(){
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        {/* <img className="img-fluid" src={this.props.image} alt="" /> */}
                        <img className="img" src={image} alt=""/>
                        <img className="img" src={image2} alt=""/>
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.title}</div>
                        <div className="portfolio-caption-subheading text-muted">{this.props.subtitle}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioItem;