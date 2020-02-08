import React from "react";
import SidebarItem from './SidebarItem';

class YouHaveVisited extends React.Component {

  render() {
    return (
      <SidebarItem title="You Have Visited">

        <section className="visited-block">

          <div className="content-block">
            <ul className="list-unstyled">

              <li className="list-item clearfix">
                <div className="image-detail-layout">
                  <div className="image-container">
                    <img src="./images/pro-15.jpg" alt="" />
                  </div>
                  <div className="detail">
                    <div className="title">One Shoulder Asymmetric Dress</div>
                    <div className="price">$125,90</div>
                  </div>
                </div>
              </li>
              <li className="list-item clearfix">
                <div className="image-detail-layout">
                  <div className="image-container">
                    <img src="./images/pro-09.jpg" alt="" />
                  </div>
                  <div className="detail">
                    <div className="title">One Shoulder Asymmetric Dress</div>
                    <div className="price">$125,90</div>
                  </div>
                </div>
              </li>
              <li className="list-item clearfix">
                <div className="image-detail-layout">
                  <div className="image-container">
                    <img src="./images/pro-21.jpg" alt="" />
                  </div>

                  <div className="detail">
                    <div className="title">One Shoulder Asymmetric Dress</div>
                    <div className="price">$125,90</div>
                  </div>
                </div>

              </li>
            </ul>
          </div>
        </section>

      </SidebarItem>

    );
  }
}

export default YouHaveVisited;