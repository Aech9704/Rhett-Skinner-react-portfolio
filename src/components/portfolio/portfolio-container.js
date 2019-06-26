import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    console.log("Portfolio container has rendered");
  }

  portfolioItems() {
    const data = ["Quip", "Eventbright", "Ministry Safe"];

    return data.map(item => {
      return <PortfolioItem />;
    })
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here updated...</h2>

        {this.PortfolioItems()}
      </div>
    );
  }
}