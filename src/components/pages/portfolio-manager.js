import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PoertflolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }
 
    handleSuccessfulFormSubmission(portfolioItem) {
        // debugger;
        // console.log("handleSuccessfulFormSubmission", portfolioItem)
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
          })

        // top works 
        // bottom does not
        // console logs but cant access the data
    }

    handleFormSubmissionError(error){
        console.log("handleFormSubmissionError error", error)
    }

getPortfolioItems() {
    axios
    .get('https://rhettskinner.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc')
    .then(responce => {
        this.setState({
            portfolioItems: [...responce.data.portfolio_items]
        });
    })
    .catch(error => {
        console.log("error in getPortfolioItems", error);
    });
}


componentDidMount() {
    this.getPortfolioItems();
}

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                        data={this.state.portfolioItems}
                    />
                </div>

                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
        );
    }
}