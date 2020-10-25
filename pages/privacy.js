import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GTheaderLinks from "components/Header/GTheaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import CookieConsent from "components/CookieConsent/CookieConsent.js";
// sections for this page
/* import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";*/

import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionMyPills from "pages-sections/Components-Sections/SectionMyPills.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";

import SectionMicroBio from "pages-sections/Components-Sections/SectionMicroBio.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";
import SectionMyDownload from "pages-sections/Components-Sections/SectionMyDownload.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";


import { NextSeo } from 'next-seo';

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Giorgio Tedesco"
        rightLinks={<GTheaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <NextSeo
        title="Giorgio Tedesco | GDPR and Privacy Settings"
        description="In this page you can set your preferences on Cookies."
        canonical="https://wwww.giorgiotedesco.it/privacy"
      />

      <Parallax image={require("assets/img/charles-deluvio-pjAH2Ax4uWk-unsplash.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>GDPO & Privacy<br />Management Tool.</h1>
                <h3 className={classes.subtitle}>
                  Please take care the website is<br /> in <b>Working in Progress*</b> mode. <sup><small>I love Privacy.</small></sup>
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>



      {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
      <div className={classNames(classes.main)}>

        <CookieConsent color="violet" />

        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h3>Things to know</h3>
                <p>I don't love to use Cookies, that's way I don't use Cookies, because I don't track your navigation. This is a static website made with ReactJs / NextJs.</p>
                <h4><strong><sup>*</sup>While this website is in Working progress, there are some libraries and links from <i>Google Fonts</i> and <i>Material Icon</i> that are loaded from providers. They could track you.</strong></h4>
                <br /><br />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* <SectionMyPills />
        <SectionMyDownload />*/}
      </div>
      <Footer />
    </div>
  );
}
