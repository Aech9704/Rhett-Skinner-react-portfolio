import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioSidebarList = (props) => {
  const portfolioList = props.data.map(portfolioItem => {
    return (
      <div key={portfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={portfolioItem.thumb_image_url} />
        </div>
        <div className="list-info-wrapper">
          <div className="list-title">
            <div className="title">{portfolioItem.name}</div>
          </div>

          <div className="action">
              <a className="list-action" onClick={() => props.handleEditClick(portfolioItem)}>
                <FontAwesomeIcon icon="edit" />            
              </a>

              <a className="list-action" onClick={() => props.handleDeleteClick(portfolioItem)}>
                <FontAwesomeIcon icon="trash" />            
              </a>
          </div>
        </div>
      </div>
    );
  });

  return( 
    <div className="portfolio-sidebar-list-wrapper">
      {portfolioList}
    </div>
  );
};

export default PortfolioSidebarList;