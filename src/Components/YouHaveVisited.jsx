import React from "react";


class YouHaveVisited extends React.Component {

  render() {
    return (
      <div className="YouHaveVisited">
        <h2>You Have Visited</h2>
        <YouHaveVisited />

        <section class="visited-block">
          <header>You have visited</header>
          <div class="content-block">
            <ul class="list-unstyled">
              <li class="list-item clearfix"><a href=""><img src="./images/pro-15.jpg" alt="" /></a>
                <div class="detail"><span class="title">One Shoulder Asymmetric Dress</span><span
                  class="price">$125,90</span>
                </div>
              </li>
              <li class="list-item clearfix"><a href=""><img src="./images/pro-09.jpg" alt="" /></a>
                <div class="detail"><span class="title">One Shoulder Asymmetric Dress</span><span
                  class="price">$125,90</span>
                </div>
              </li>
              <li class="list-item clearfix"><a href=""><img src="./images/pro-21.jpg" alt="" /></a>
                <div class="detail"><span class="title">One Shoulder Asymmetric Dress</span><span
                  class="price">$125,90</span>
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