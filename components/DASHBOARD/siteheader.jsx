import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { LatoLightAlabaster30px } from "../../styledMixins";

class SiteHeader extends React.Component {
  render() {
    const { kappaLogo } = this.props;
    return (
      <div className="siteheader2">
        <ul>
          <li>
            <KappaLogo src={kappaLogo} />
          </li>
          <SiteHeaderText>Kappa</SiteHeaderText>
          <Link to="/ourstory">
            <SiteHeaderText>Our Story</SiteHeaderText>
          </Link>
          <Link to="/team">
            <SiteHeaderText>Team</SiteHeaderText>
          </Link>
          <Link to="/FAQs">
            <SiteHeaderText>FAQs</SiteHeaderText>
          </Link>
          <SiteHeaderText className="language">English</SiteHeaderText>
          <Link to="/sendmoney">
            <SiteHeaderText className="sendmoney">Send Money</SiteHeaderText>
          </Link>
        </ul>
      </div>
    );
  }
}

const SiteHeaderText = styled.li`
  ${LatoLightAlabaster30px}
  vertical-align: middle;
  margin-top: 4.5ex;
`;

const KappaLogo = styled.img`
  width: 247px;
  height: 155px;
  top: 6px;
  left: 0;
  object-fit: cover;
`;

export default SiteHeader;
