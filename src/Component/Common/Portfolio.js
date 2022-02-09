import React, {Component} from 'react';

//Common
import PortfolioItem from './PortfolioItem';
//Images
import portfolioImages from '../assets/img/PortfolioImages';

const portfolio = [
    {title:'Threads', subtitle:'Illustration', image:portfolioImages.imageOne},
    {title:'Explore', subtitle:'Graphic design', image:portfolioImages.imageTwo},
    {title:'Finish', subtitle:'Identity', image:portfolioImages.imageThree},
    {title:'Lines', subtitile:'Branding', image:portfolioImages.imageFour},
    {title:'Southwest', subtitle:'Website design', image:portfolioImages.imageFive},
    {title:'Window', subtitle:'Photography', image:portfolioImages.imageSix}
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
                           return (<PortfolioItem {...item} key={index}/>);
                       })}
                    </div>
                </div>
            </section>)
    }
}

export default Portfolio;