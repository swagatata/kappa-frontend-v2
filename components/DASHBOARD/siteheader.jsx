import React from "react";

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
          <SiteHeaderText>Our Story</SiteHeaderText>
          <SiteHeaderText>Team</SiteHeaderText>
          <SiteHeaderText>FAQs</SiteHeaderText>
          <SiteHeaderText className="language">English</SiteHeaderText>
          <SiteHeaderText className="sendmoney">Send Money</SiteHeaderText>
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
