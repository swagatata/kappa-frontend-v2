import React from "react";
import styled from "styled-components";
import {
  LatoSemiBoldDiesel40px,
  LatoExtraBoldWhite45px,
  LatoLightAlabaster30px,
  LatoExtraBoldWhite48px,
  LatoBoldBlack40px,
  LatoNormalDiesel40px,
  LatoLightBlack31px,
  LatoSemiBoldBlack30px,
  LatoBoldPumice25px,
  LatoLightBunker30px
} from "../../styledMixins";
import "./DASHBOARD.css";
import SiteHeader from "./siteheader";

class DASHBOARD extends React.Component {
  render() {
    const {
      blueBackgrounImage,
      team,
      faqs,
      backgroundCopy1,
      background1,
      vector2,
      vector3,
      spanText,
      spanText2,
      surname,
      scrollDownArrowIcon300X3001,
      sendMoney,
      whatsappImage20210720At1521,
      vecteezy_AbstractGeometricGradientB,
      x3153159296_UsProgramUsaFlagIconSvg,
      place,
      x4424426111_DownSoulSpiritIconArrow,
      place2,
      receive,
      place3,
      x4424426111_DownSoulSpiritIconArrow2,
      text2,
      price,
      price2,
      aaaaaaaaaaaaa1,
      text3,
      arrow1,
      arrow2,
      place4,
      text4,
      spanText3,
      spanText4,
      play_Google_Logo1,
      image1,
      pngTransparentComputerIconsWritingA,
      easyToSignUp,
      text7,
      kisspngComputerIconsPadlockWebTypog,
      text9,
      text10,
      image2,
      zeroFees,
      text8,
      imgbinExchangeRateComputerIconsCurr,
      x247ServiceIcon11549754543Nocqs6T12,
      x247Support,
      text11,
      line5,
      whatsappImage20210720At1341,
      company,
      place5,
      kappa2,
      contactUs,
      ourStory2,
      termsCondition,
      text6,
      team2,
      privacyPolicy,
      faqs2,
      x51610747678Jqsl4Zyp1Opbwnnmlbnfdxn,
      line6,
      kappaInc
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="dashboard screen">
          <Header className="header">
            <OverlapGroup
              style={{ backgroundImage: `url(${blueBackgrounImage})` }}
            >
              <SiteHeader></SiteHeader>
              <OverlapGroup1>
                <Team>{team}</Team>
                <FAQs>{faqs}</FAQs>
                <BackgroundCopy1 src={backgroundCopy1} />
                <Background1 src={background1} />
                <Vector2 src={vector2} />
                <Vector3 src={vector3} />
                <Text1>
                  <span className="lato-extra-bold-white-48px">{spanText}</span>
                  <Span1>{spanText2}</Span1>
                </Text1>
                <Lang>
                  <OverlapGroup2>
                    <Surname>{surname}</Surname>
                    <ScrollDownArrowIcon300x3001
                      src={scrollDownArrowIcon300X3001}
                    />
                  </OverlapGroup2>
                </Lang>
              </OverlapGroup1>
              <SendMoney>{sendMoney}</SendMoney>
              <WhatsAppImage20210720At1521 src={whatsappImage20210720At1521} />
            </OverlapGroup>
          </Header>
          <ExchangeRate>
            <OverlapGroup3>
              <VecteezyAbstractGeometricGradientBa
                src={vecteezy_AbstractGeometricGradientB}
              />
              <Group7>
                <OverlapGroup4>
                  <X3153159296UsProgramUsaFlagIconSvg1
                    src={x3153159296_UsProgramUsaFlagIconSvg}
                  />
                  <OverlapGroup11>
                    <Place>{place}</Place>
                    <X4424426111DownSoulSpiritIconArrowD
                      src={x4424426111_DownSoulSpiritIconArrow}
                    />
                  </OverlapGroup11>
                </OverlapGroup4>
              </Group7>
              <Group10>
                <OverlapGroup21>
                  <Place1>{place2}</Place1>
                  <RECEIVE>{receive}</RECEIVE>
                </OverlapGroup21>
              </Group10>
              <Group8>
                <OverlapGroup41>
                  <Place2>{place3}</Place2>
                  <X4424426111DownSoulSpiritIconArrowD1
                    src={x4424426111_DownSoulSpiritIconArrow2}
                  />
                </OverlapGroup41>
              </Group8>
              <Text2>{text2}</Text2>
              <Price>{price}</Price>
              <Price1>{price2}</Price1>
              <Aaaaaaaaaaaaa1 src={aaaaaaaaaaaaa1} />
              <SendMoney1></SendMoney1>
              <Text3>{text3}</Text3>
              <Arrow1 src={arrow1} />
              <Arrow2 src={arrow2} />
              <Rectangle18></Rectangle18>
              <Place3>{place4}</Place3>
            </OverlapGroup3>
          </ExchangeRate>
          <About>
            <OverlapGroup5>
              <Rectangle9></Rectangle9>
              <Text4>{text4}</Text4>
              <Rectangle6></Rectangle6>
              <Text5>
                <span className="lato-extra-bold-white-45px">{spanText3}</span>
                <Span11>{spanText4}</Span11>
              </Text5>
              <PlayGoogleLogo1 src={play_Google_Logo1} />
              <Image1 src={image1} />
            </OverlapGroup5>
          </About>
          <ImageFeatures>
            <OverlapGroup6>
              <Group9>
                <OverlapGroup7>
                  <PngTransparentComputerIconsWritingA
                    src={pngTransparentComputerIconsWritingA}
                  />
                  <EasyToSignUp>{easyToSignUp}</EasyToSignUp>
                  <Text7>{text7}</Text7>
                </OverlapGroup7>
              </Group9>
              <Group11>
                <OverlapGroup12>
                  <KisspngComputerIconsPadlockWebTypog
                    src={kisspngComputerIconsPadlockWebTypog}
                  />
                  <Text9>{text9}</Text9>
                  <Text10>{text10}</Text10>
                </OverlapGroup12>
              </Group11>
              <Image2 src={image2} />
            </OverlapGroup6>
            <FlexCol>
              <Group12>
                <OverlapGroup22>
                  <Rectangle8></Rectangle8>
                  <ZeroFees>{zeroFees}</ZeroFees>
                  <Text8>{text8}</Text8>
                  <ImgbinExchangeRateComputerIconsCurr
                    src={imgbinExchangeRateComputerIconsCurr}
                  />
                </OverlapGroup22>
              </Group12>
              <Group101>
                <OverlapGroup31>
                  <X247ServiceIcon11549754543nocqs6t12
                    src={x247ServiceIcon11549754543Nocqs6T12}
                  />
                  <X247Support>{x247Support}</X247Support>
                  <Text7>{text11}</Text7>
                </OverlapGroup31>
              </Group101>
            </FlexCol>
          </ImageFeatures>
          <Footer>
            <Line5 src={line5} />
            <FlexRow>
              <WhatsAppImage20210720At1341 src={whatsappImage20210720At1341} />
              <FlexCol1>
                <FlexRow1>
                  <Company>{company}</Company>
                  <Place4>{place5}</Place4>
                </FlexRow1>
                <FlexRow2>
                  <Kappa1>{kappa2}</Kappa1>
                  <ContactUs>{contactUs}</ContactUs>
                </FlexRow2>
              </FlexCol1>
            </FlexRow>
            <FlexCol2>
              <FlexRow3>
                <OurStory1>{ourStory2}</OurStory1>
                <TermsCondition>{termsCondition}</TermsCondition>
              </FlexRow3>
              <FlexRow4>
                <Text6>{text6}</Text6>
                <Team1>{team2}</Team1>
                <PrivacyPolicy>{privacyPolicy}</PrivacyPolicy>
              </FlexRow4>
              <FlexRow5>
                <FAQs1>{faqs2}</FAQs1>
                <X51610747678jqsl4zyp1opbwnnmlbnfdxn
                  src={x51610747678Jqsl4Zyp1Opbwnnmlbnfdxn}
                />
              </FlexRow5>
              <Line6 src={line6} />
              <KappaInc>{kappaInc}</KappaInc>
            </FlexCol2>
          </Footer>
        </div>
      </div>
    );
  }
}

const Header = styled.div`
  margin-right: -12px;
  display: flex;
  align-items: flex-start;
  min-width: 1452px;
`;

const OverlapGroup = styled.div`
  width: 1440px;
  height: 866px;
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1440px;
  height: 741px;
  top: 66px;
  left: 0;
`;

const Team = styled.div`
  ${LatoLightAlabaster30px}
  position: absolute;
  width: 73px;
  top: 0;
  left: 604px;
  letter-spacing: 0;
`;

const FAQs = styled.div`
  ${LatoLightAlabaster30px}
  position: absolute;
  width: 73px;
  top: 4px;
  left: 734px;
  letter-spacing: 0;
`;

const BackgroundCopy1 = styled.img`
  position: absolute;
  width: 454px;
  height: 331px;
  top: 409px;
  left: 986px;
  object-fit: cover;
`;

const Background1 = styled.img`
  position: absolute;
  width: 986px;
  height: 644px;
  top: 97px;
  left: 0;
  object-fit: cover;
`;

const Vector2 = styled.img`
  position: absolute;
  width: 400px;
  height: 433px;
  top: 11px;
  left: 660px;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 468px;
  height: 366px;
  top: 359px;
  left: 972px;
`;

const Text1 = styled.div`
  ${LatoExtraBoldWhite48px}
  position: absolute;
  width: 562px;
  top: 159px;
  left: 840px;
  text-align: right;
  letter-spacing: 0;
`;

const Span1 = styled.span`
  font-family: var(--font-family-lato);
  font-weight: 700;
  color: var(--white);
  font-size: 35px;
`;

const Lang = styled.div`
  position: absolute;
  height: 29px;
  top: 14px;
  left: 898px;
  display: flex;
  align-items: flex-start;
`;

const OverlapGroup2 = styled.div`
  width: 110px;
  height: 29px;
  position: relative;
`;

const Surname = styled.div`
  position: absolute;
  width: 110px;
  top: 0;
  left: 0;
  font-family: var(--font-family-lato);
  font-weight: 300;
  color: var(--alabaster);
  font-size: 18px;
  letter-spacing: 0;
`;

const ScrollDownArrowIcon300x3001 = styled.img`
  position: absolute;
  width: 27px;
  height: 13px;
  top: 4px;
  left: 76px;
  object-fit: cover;
`;

const SendMoney = styled.div`
  position: absolute;
  width: 306px;
  top: 58px;
  left: 1130px;
  font-family: var(--font-family-lato);
  font-weight: 800;
  color: var(--header-send-money);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
`;

const WhatsAppImage20210720At1521 = styled.img`
  position: absolute;
  width: 247px;
  height: 155px;
  top: 6px;
  left: 0;
  object-fit: cover;
`;

const ExchangeRate = styled.div`
  margin-top: 35px;
  margin-right: -10px;
  display: flex;
  align-items: flex-end;
  min-width: 1458px;
`;

const OverlapGroup3 = styled.div`
  width: 1448px;
  height: 712px;
  position: relative;
  margin-bottom: -0.12px;
`;

const VecteezyAbstractGeometricGradientBa = styled.img`
  position: absolute;
  width: 1448px;
  height: 646px;
  top: 66px;
  left: 0;
  object-fit: cover;
`;

const Group7 = styled.div`
  position: absolute;
  height: 82px;
  top: 205px;
  left: 76px;
  display: flex;
  align-items: flex-start;
`;

const OverlapGroup4 = styled.div`
  height: 82px;
  display: flex;
  padding: 10.9px 19.5px;
  align-items: flex-start;
  min-width: 481px;
  background-color: var(--white);
  border-radius: 15px;
`;

const X3153159296UsProgramUsaFlagIconSvg1 = styled.img`
  width: 73px;
  height: 54px;
  object-fit: cover;
`;

const OverlapGroup11 = styled.div`
  width: 341px;
  height: 39px;
  position: relative;
  align-self: center;
  margin-left: 26px;
  margin-bottom: 4.9px;
`;

const Place = styled.div`
  ${LatoSemiBoldDiesel40px}
  position: absolute;
  width: 298px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const X4424426111DownSoulSpiritIconArrowD = styled.img`
  position: absolute;
  width: 58px;
  height: 21px;
  top: 11px;
  left: 283px;
  object-fit: cover;
`;

const Group10 = styled.div`
  position: absolute;
  height: 120px;
  top: 364px;
  left: 242px;
  display: flex;
  align-items: flex-start;
`;

const OverlapGroup21 = styled.div`
  height: 120px;
  display: flex;
  padding: 6px 95px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 988px;
  background-color: var(--white);
  border-radius: 15px;
`;

const Place1 = styled.div`
  ${LatoBoldPumice25px}
  width: 296px;
  min-height: 38px;
  text-align: center;
  letter-spacing: 0;
`;

const RECEIVE = styled.div`
  ${LatoBoldPumice25px}
  width: 296px;
  min-height: 38px;
  margin-left: 200px;
  text-align: center;
  letter-spacing: 0;
`;

const Group8 = styled.div`
  position: absolute;
  height: 82px;
  top: 205px;
  left: 870px;
  display: flex;
  align-items: flex-start;
`;

const OverlapGroup41 = styled.div`
  height: 82px;
  display: flex;
  padding: 19.1px 19.3px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 454px;
  background-color: var(--white);
  border-radius: 15px;
`;

const Place2 = styled.div`
  ${LatoSemiBoldDiesel40px}
  width: 221px;
  min-height: 39px;
  letter-spacing: 0;
`;

const X4424426111DownSoulSpiritIconArrowD1 = styled.img`
  width: 55px;
  height: 21px;
  align-self: center;
  margin-left: 46px;
  margin-top: 0;
  object-fit: cover;
`;

const Text2 = styled.div`
  position: absolute;
  width: 605px;
  top: 502px;
  left: 426px;
  font-family: var(--font-family-lato);
  color: var(--white);
  font-size: var(--font-size-s);
  text-align: center;
  letter-spacing: 0;
`;

const Price = styled.div`
  ${LatoNormalDiesel40px}
  position: absolute;
  width: 291px;
  top: 409px;
  left: 346px;
  text-align: center;
  letter-spacing: 0;
`;

const Price1 = styled.div`
  ${LatoNormalDiesel40px}
  position: absolute;
  width: 291px;
  top: 408px;
  left: 847px;
  text-align: center;
  letter-spacing: 0;
`;

const Aaaaaaaaaaaaa1 = styled.img`
  position: absolute;
  width: 55px;
  height: 63px;
  top: 212px;
  left: 897px;
  object-fit: cover;
`;

const SendMoney1 = styled.div`
  position: absolute;
  width: 819px;
  height: 127px;
  top: 0;
  left: 314px;
  background-color: var(--azure);
  border-radius: 15px;
`;

const Text3 = styled.h1`
  position: absolute;
  width: 632px;
  top: 27px;
  left: 474px;
  font-family: var(--font-family-lato);
  font-weight: 600;
  color: var(--white);
  font-size: 60px;
  letter-spacing: 0;
`;

const Arrow1 = styled.img`
  position: absolute;
  width: 144px;
  height: 58px;
  top: 214px;
  left: 637px;
`;

const Arrow2 = styled.img`
  position: absolute;
  width: 2px;
  height: 120px;
  top: 364px;
  left: 706px;
`;

const Rectangle18 = styled.div`
  position: absolute;
  width: 377px;
  height: 86px;
  top: 568px;
  left: 535px;
  background-color: var(--azure);
  border-radius: 15px;
`;

const Place3 = styled.div`
  position: absolute;
  width: 379px;
  top: 584px;
  left: 535px;
  font-family: var(--font-family-lato);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xxxl2);
  text-align: center;
  letter-spacing: 0;
`;

const About = styled.div`
  margin-top: 167px;
  margin-right: -4px;
  display: flex;
  align-items: flex-end;
  min-width: 1444px;
`;

const OverlapGroup5 = styled.div`
  width: 1440px;
  height: 494px;
  position: relative;
  margin-bottom: 0;
`;

const Rectangle9 = styled.div`
  position: absolute;
  width: 1440px;
  height: 421px;
  top: 73px;
  left: 0;
  background-color: #325f9899;
  border-radius: 15px;
`;

const Text4 = styled.div`
  position: absolute;
  width: 1319px;
  top: 162px;
  left: 69px;
  font-family: var(--font-family-lato);
  color: var(--white);
  font-size: var(--font-size-l2);
  letter-spacing: 0;
`;

const Rectangle6 = styled.div`
  position: absolute;
  width: 637px;
  height: 132px;
  top: 0;
  left: 402px;
  background-color: var(--azure);
  border-radius: 15px;
`;

const Text5 = styled.div`
  ${LatoExtraBoldWhite45px}
  position: absolute;
  width: 559px;
  top: 14px;
  left: 482px;
  letter-spacing: 0;
`;

const Span11 = styled.span`
  font-family: var(--font-family-lato);
  color: var(--white);
  font-size: 35px;
`;

const PlayGoogleLogo1 = styled.img`
  position: absolute;
  width: 392px;
  height: 110px;
  top: 373px;
  left: 456px;
  object-fit: cover;
`;

const Image1 = styled.img`
  position: absolute;
  width: 337px;
  height: 100px;
  top: 373px;
  left: 64px;
  object-fit: cover;
`;

const ImageFeatures = styled.div`
  height: 1010px;
  margin-top: 184px;
  margin-right: -1px;
  display: flex;
  align-items: flex-start;
  min-width: 1426px;
`;

const OverlapGroup6 = styled.div`
  width: 899px;
  height: 977px;
  position: relative;
`;

const Group9 = styled.div`
  position: absolute;
  height: 381px;
  top: 50px;
  left: 0;
  display: flex;
  align-items: flex-start;
`;

const OverlapGroup7 = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  padding: 20px 22px;
  align-items: flex-start;
  min-height: 381px;
  background-color: var(--white);
`;

const PngTransparentComputerIconsWritingA = styled.img`
  width: 91px;
  height: 96px;
  margin-left: 16px;
  object-fit: cover;
`;

const EasyToSignUp = styled.div`
  ${LatoBoldBlack40px}
  min-height: 48px;
  margin-top: 30px;
  margin-left: 16px;
  letter-spacing: 0;
`;

const Text7 = styled.div`
  ${LatoLightBlack31px}
  width: 370px;
  min-height: 126px;
  align-self: flex-end;
  margin-top: 30px;
  letter-spacing: 0;
`;

const Group11 = styled.div`
  position: absolute;
  height: 381px;
  top: 596px;
  left: 7px;
  display: flex;
  align-items: flex-start;
`;

const OverlapGroup12 = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  padding: 0 29px;
  align-items: flex-start;
  min-height: 381px;
  background-color: var(--white);
`;

const KisspngComputerIconsPadlockWebTypog = styled.img`
  width: 105px;
  height: 94px;
  margin-left: 2px;
  object-fit: cover;
`;

const Text9 = styled.div`
  ${LatoBoldBlack40px}
  width: 363px;
  min-height: 49px;
  align-self: flex-end;
  margin-top: 51px;
  letter-spacing: 0;
`;

const Text10 = styled.div`
  ${LatoLightBlack31px}
  width: 322px;
  min-height: 85px;
  margin-top: 63px;
  margin-left: 9px;
  letter-spacing: 0;
`;

const Image2 = styled.img`
  position: absolute;
  width: 493px;
  height: 953px;
  top: 0;
  left: 406px;
  object-fit: cover;
`;

const FlexCol = styled.div`
  width: 458px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 960px;
  align-self: flex-end;
  margin-left: 73px;
`;

const Group12 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 434px;
`;

const OverlapGroup22 = styled.div`
  width: 430px;
  height: 390px;
  position: relative;
`;

const Rectangle8 = styled.div`
  position: absolute;
  width: 430px;
  height: 381px;
  top: 0;
  left: 0;
  background-color: var(--white);
`;

const ZeroFees = styled.div`
  ${LatoBoldBlack40px}
  position: absolute;
  width: 370px;
  top: 146px;
  left: 38px;
  letter-spacing: 0;
`;

const Text8 = styled.div`
  ${LatoLightBlack31px}
  position: absolute;
  width: 370px;
  top: 264px;
  left: 38px;
  letter-spacing: 0;
`;

const ImgbinExchangeRateComputerIconsCurr = styled.img`
  position: absolute;
  width: 94px;
  height: 97px;
  top: 20px;
  left: 38px;
  object-fit: cover;
`;

const Group101 = styled.div`
  height: 381px;
  align-self: flex-end;
  margin-top: 189px;
  display: flex;
  align-items: flex-start;
  min-width: 434px;
`;

const OverlapGroup31 = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  padding: 0 22px;
  align-items: flex-start;
  min-height: 381px;
  background-color: var(--white);
`;

const X247ServiceIcon11549754543nocqs6t12 = styled.img`
  width: 111px;
  height: 112px;
  margin-left: 16px;
  object-fit: cover;
`;

const X247Support = styled.div`
  ${LatoBoldBlack40px}
  min-height: 48px;
  margin-top: 34px;
  margin-left: 16px;
  letter-spacing: 0;
`;

const Footer = styled.div`
  width: 1462px;
  margin-top: 446px;
  margin-right: -14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 460px;
`;

const Line5 = styled.img`
  width: 1448px;
  height: 9px;
  margin-left: -4px;
`;

const FlexRow = styled.div`
  height: 109px;
  display: flex;
  align-items: flex-start;
  min-width: 1149px;
  margin-top: 42px;
  margin-left: 45px;
`;

const WhatsAppImage20210720At1341 = styled.img`
  width: 149px;
  height: 105px;
  object-fit: cover;
`;

const FlexCol1 = styled.div`
  width: 648px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 109px;
  margin-left: 352px;
`;

const FlexRow1 = styled.div`
  height: 36px;
  display: flex;
  align-items: flex-start;
  min-width: 535px;
`;

const Company = styled.div`
  ${LatoSemiBoldBlack30px}
  min-height: 36px;
  min-width: 128px;
  letter-spacing: 0;
`;

const Place4 = styled.div`
  ${LatoSemiBoldBlack30px}
  min-height: 36px;
  margin-left: 336px;
  letter-spacing: 0;
`;

const FlexRow2 = styled.div`
  height: 38px;
  display: flex;
  align-items: flex-start;
  min-width: 644px;
  margin-top: 35px;
  margin-left: 4px;
`;

const Kappa1 = styled.div`
  ${LatoLightBunker30px}
  width: 129px;
  min-height: 34px;
  letter-spacing: 0;
`;

const ContactUs = styled.div`
  ${LatoLightBunker30px}
  width: 184px;
  min-height: 34px;
  align-self: flex-end;
  margin-left: 331px;
  letter-spacing: 0;
`;

const FlexCol2 = styled.div`
  width: 1448px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 273px;
  margin-top: 27px;
  margin-left: -4px;
`;

const FlexRow3 = styled.div`
  height: 38px;
  display: flex;
  align-items: flex-start;
  min-width: 735px;
  align-self: flex-end;
  margin-right: 159px;
`;

const OurStory1 = styled.div`
  ${LatoLightBunker30px}
  width: 129px;
  min-height: 34px;
  align-self: flex-end;
  letter-spacing: 0;
`;

const TermsCondition = styled.div`
  ${LatoLightBunker30px}
  width: 275px;
  min-height: 34px;
  margin-left: 331px;
  letter-spacing: 0;
`;

const FlexRow4 = styled.div`
  height: 51px;
  display: flex;
  align-items: flex-end;
  min-width: 1240px;
  margin-top: 13px;
  margin-left: 49px;
`;

const Text6 = styled.div`
  min-height: 24px;
  align-self: flex-start;
  min-width: 309px;
  font-family: var(--font-family-lato);
  font-weight: 300;
  color: var(--black);
  font-size: var(--font-size-s2);
  letter-spacing: 0;
`;

const Team1 = styled.div`
  ${LatoLightBunker30px}
  width: 129px;
  min-height: 34px;
  margin-left: 195px;
  letter-spacing: 0;
`;

const PrivacyPolicy = styled.div`
  ${LatoLightBunker30px}
  width: 275px;
  min-height: 34px;
  margin-left: 332px;
  margin-bottom: 0.18px;
  letter-spacing: 0;
`;

const FlexRow5 = styled.div`
  display: flex;
  align-items: center;
  min-width: 631px;
  align-self: center;
  margin-top: 17px;
  margin-left: 291px;
`;

const FAQs1 = styled.div`
  ${LatoLightBunker30px}
  width: 129px;
  min-height: 34px;
  margin-bottom: 16.82px;
  letter-spacing: 0;
`;

const X51610747678jqsl4zyp1opbwnnmlbnfdxn = styled.img`
  width: 182px;
  height: 89px;
  margin-left: 320px;
  object-fit: cover;
`;

const Line6 = styled.img`
  width: 1448px;
  height: 9px;
  margin-top: 10px;
`;

const KappaInc = styled.div`
  min-height: 30px;
  margin-top: 13px;
  margin-left: 19px;
  font-family: var(--font-family-lato);
  font-weight: 300;
  color: #592222;
  font-size: var(--font-size-s);
  letter-spacing: 0;
`;

export default DASHBOARD;
