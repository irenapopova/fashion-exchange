import React from "react";


class YouHaveVisited extends React.Component {

  render() {
    return (
      <div className="YouHaveVisited">
        <h2>You Have Visited</h2>
        <YouHaveVisited />

        <section className="visited-block">
          <header>You have visited</header>
          <div className="content-block">
            <ul className="list-unstyled">
              <li className="list-item clearfix"><a href=""><img src="./images/pro-15.jpg" alt="" /></a>
                <div className="detail"><span className="title">One Shoulder Asymmetric Dress</span><span
                  className="price">$125,90</span>
                </div>
              </li>
              <li className="list-item clearfix"><a href=""><img src="./images/pro-09.jpg" alt="" /></a>
                <div className="detail"><span className="title">One Shoulder Asymmetric Dress</span><span
                  className="price">$125,90</span>
                </div>
              </li>
              <li className="list-item clearfix"><a href=""><img src="./images/pro-21.jpg" alt="" /></a>
                <div className="detail"><span className="title">One Shoulder Asymmetric Dress</span><span
                  className="price">$125,90</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

      </div>

    );
  }
}

export default YouHaveVisited;