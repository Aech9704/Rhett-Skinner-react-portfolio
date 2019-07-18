import React, { Component } from "react";
import axios from "axios";

export default class PoertfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.getPortfolioItem=this.getPortfolioItem.bind(this)

        this.state = {
            portfolioItem: "",
        }
    }

    componentWillMount() {
        this.getPortfolioItem()
    }

    getPortfolioItem() {
        axios.get(
                `https://rhettskinner.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
                { withCredentials: true }
            ).then(response => {
                this.setState({
                    portfolioItem: response.data.portfolio_item
                })
            }).catch(error => {
                console.log("error in getPortfolioItem", error)
            }) 

            
    }

    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url,
        } = this.state.portfolioItem;

        const bannerStyles ={
            backgroundImage: "url(" + banner_image_url + ")",
            backgroundSize: "cover",
            background: "no-repeate",
            backgroundPostion: "center center"
        }
        return (
            <div className="description-wrapper">
                < div className="banner-img" style={bannerStyles}>
                    <img src={logo_url} />
                </div>

                <div className="description-wrapper">
                    <div className="description">
                        {description}
                    </div>
                </div>

                <div className="website">
                    <a href={url} className="site-link" target="_blank">
                        Vist {name}
                    </a>
                </div>
            </div>
        );
    }
}