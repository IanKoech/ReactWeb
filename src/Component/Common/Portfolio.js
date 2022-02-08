import react, {Component} from 'react';

//Common
import PortfolioItem from './PortfolioItem';

const potrfolio = [
    {title:"", subtitle:"", image:""},
];

class Portfolio extends Component{
    render(){
        return ( 
            <section className="page-section bg-light" id="portfolio" style={}>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                       {potrfolio.map(({item, index}) => {
                           return <PortfolioItem {...item} key={index}/>
                       })}
                    </div>
                </div>
            </section>)
    }
}

export default Portfolio;