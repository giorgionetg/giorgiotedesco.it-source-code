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

import { NextSeo } from 'next-seo';

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

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
        title="Giorgio Tedesco | Just a web developer."
        description="This website shows Giorgio Tedesco's skills on web development. This website has also a lot of information on CG3D, Blender, Web Development, Cryptocurrencies and Artificial Intelligence too."
        canonical="https://www.giorgiotedesco.it/web-developer"
      />

      <Parallax image={require("assets/img/andras-vas-Bd7gNnWJBkU-unsplash.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Just a web developer</h1>
                <h3 className={classes.subtitle}>
                  Based in Rome (Italy) and born in Brazil!
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>



      {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
      <div className={classNames(classes.main)}>

        <CookieConsent  />

        {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel /> */}
        <SectionMicroBio />
        <br /><br />
        {/* <SectionMyPills />
        <SectionMyDownload />*/}
      </div>
      <Footer />
    </div>
  );
}
