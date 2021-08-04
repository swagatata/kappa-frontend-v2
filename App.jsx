import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DASHBOARD from "./components/DASHBOARD";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|dashboard)">
            <DASHBOARD {...dASHBOARDData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const dASHBOARDData = {
  blueBackgrounImage:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6103387f6564620de02575c1/img/back-1@1x.png",
  backgroundCopy1:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/background-copy-1@2x.png",
  background1:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/background-1@1x.png",
  vector2:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/vector-2@2x.svg",
  vector3:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/vector-3@2x.svg",
  spanText: (
    <>
      Send more money home for less. The fee is on us, our rate is the best.
      <br />
    </>
  ),
  spanText2: "",
  surname: "ENGLISH",
  scrollDownArrowIcon300X3001:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/scroll-down-arrow-icon-300x300-1@2x.png",
  sendMoney: "Send Money",
  kappaLogo:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6103387f6564620de02575c1/img/whatsapp-image-2021-07-20-at-1-52-1@2x.png",
  vecteezy_AbstractGeometricGradientB:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/vecteezy-abstract-geometric-gradient-background-ws0221-generated@1x.png",
  x3153159296_UsProgramUsaFlagIconSvg:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/315-3159296-us-program-usa-flag-icon-svg-1@2x.png",
  place: "United States",
  x4424426111_DownSoulSpiritIconArrow:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/442-4426111-down-soul-spirit-icon-arrow-down-icon-svg-1@2x.png",
  place2: "SEND",
  receive: "RECEIVE",
  place3: "Cameroon",
  x4424426111_DownSoulSpiritIconArrow2:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/442-4426111-down-soul-spirit-icon-arrow-down-icon-svg-1-1@2x.png",
  text2: "Exchange Rate: $1 = 557.23 XAF",
  price: "$100.00",
  price2: "55,000 XAF",
  aaaaaaaaaaaaa1:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/aaaaaaaaaaaaa-1@2x.png",
  text3: "Send Money with Love",
  arrow1:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/arrow-1@2x.svg",
  arrow2:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/arrow-2@2x.svg",
  place4: "Send",
  text4: (
    <>
      Enjoy free and instant money transfer from your smartphone to the mobile
      money wallets of your friends and loved ones in Cameroon and Nigeria.{" "}
      <br />
      <br />
      Are you in Cameroon or Nigeria? You can use our services to send money
      abroad for low fees and best exchange rates.
    </>
  ),
  spanText3: (
    <>
      Zero Fees &amp; Best Rates
      <br />
    </>
  ),
  spanText4: "Instant & Secure Money Transfer",
  play_Google_Logo1:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/play-google-logo-1@2x.png",
  image1:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/image-1@2x.png",
  pngTransparentComputerIconsWritingA:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/png-transparent-computer-icons-writing-annotation-annotated-bibl@2x.png",
  easyToSignUp: "Easy to sign up",
  text7:
    "Easily link your debit and credit card, fast verification and ready to send",
  kisspngComputerIconsPadlockWebTypog:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/kisspng-computer-icons-padlock-web-typography-clip-art-schloss-5@2x.png",
  text9: "Fast and Secure transfer",
  text10: "Instant and secured transfer",
  image2:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/image-2@1x.png",
  zeroFees: "Zero fees",
  text8: "There are no hidden fees and you get best exchange rates",
  imgbinExchangeRateComputerIconsCurr:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/imgbin-exchange-rate-computer-icons-currency-coin-united-states-@2x.png",
  x247ServiceIcon11549754543Nocqs6T12:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6106a5cb4a92f15de20d445c/img/24-7-service-icon-11549754543nocqs6t126-1@2x.png",
  x247Support: "24 / 7 Support",
  text11: " 24/7 support in French, English, and Arabic",
  line5:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6103387f6564620de02575c1/img/line-5@1x.svg",
  whatsappImage20210720At1341:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6103387f6564620de02575c1/img/whatsapp-image-2021-07-20-at-1-34-1@2x.png",
  company: "Company",
  place5: "Legal",
  kappa2: "Kappa",
  contactUs: "Contact Us",
  ourStory2: "Our Story",
  termsCondition: "Terms & Condition",
  text6: "Android and iOS apps coming soon.",
  team2: "Team",
  privacyPolicy: "Privacy Policy",
  faqs2: "FAQs",
  x51610747678Jqsl4Zyp1Opbwnnmlbnfdxn:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6103387f6564620de02575c1/img/51610747678jqsl4zyp1opbwnnmlbnfdxnnmcvetrxixfifg2koat83fdze04bfl@2x.png",
  line6:
    "https://anima-uploads.s3.amazonaws.com/projects/60fc3546589b4ff8667aa664/releases/6103387f6564620de02575c1/img/line-5@1x.svg",
  kappaInc: "@Kappa Inc."
};
