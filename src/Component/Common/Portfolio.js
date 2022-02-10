import React, {Component} from 'react';

//Common
import PortfolioItem from './PortfolioItem';

//Image3
import imageOne from '../assets/img/ImageOne';
import imageTwo from '../assets/img/ImageTwo';
import imageThree from '../assets/img/ImageThree';
import imageFour from '../assets/img/ImageFour';
import imageFive from '../assets/img/ImageFive';
import imageSix from '../assets/img/ImageSix';

const portfolio = [
    {title:'Threads', subtitle:'Illustration', image:imageOne},
    {title:'Explore', subtitle:'Graphic design', image:imageTwo},
    {title:'Finish', subtitle:'Identity', image:imageThree},
    {title:'Lines', subtitile:'Branding', image:imageFour},
    {title:'Southwest', subtitle:'Website design', image:imageFive},
    {title:'Window', subtitle:'Photography', image:imageSix}
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