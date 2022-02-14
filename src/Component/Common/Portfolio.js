import React, {Component} from 'react';

//Common
import PortfolioItem from './PortfolioItem';

//Image3
import imageOne from '../assets/img/ImageOne';

console.log(imageOne);

const portfolio = [
    {title:'Threads', subtitle:'Illustration'},
    {title:'Explore', subtitle:'Graphic design'},
    {title:'Finish', subtitle:'Identity'},
    {title:'Lines', subtitile:'Branding'},
    {title:'Southwest', subtitle:'Website design'},
    {title:'Window', subtitle:'Photography'}
];

class Portfolio extends Component{
    render(){
        return ( 
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                       {portfolio.map(({item, index}) => {
                           return <PortfolioItem {...item} key={index}/>;
                       })}
                    </div>
                </div>
            </section>)
    }
}

export default Portfolio;