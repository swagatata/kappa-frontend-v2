import React from "react";

import styled from "styled-components";
import { LatoLightAlabaster30px } from "../../styledMixins";

class SiteHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <Kappa>Kappa</Kappa>
        <OurStory>Our Story</OurStory>
      </div>
    );
  }
}

const Kappa = styled.div`
  position: absolute;
  width: 88px;
  top: 60px;
  left: 277px;
  font-family: var(--font-family-lato);
  font-weight: 700;
  color: var(--alabaster);
  font-size: var(--font-size-l2);
  letter-spacing: 0;
`;

const OurStory = styled.div`
  ${LatoLightAlabaster30px}
  position: absolute;
  width: 129px;
  top: 64px;
  left: 420px;
  letter-spacing: 0;
`;

export default SiteHeader;