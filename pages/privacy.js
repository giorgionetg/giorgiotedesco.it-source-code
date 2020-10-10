import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GTheaderLinks from "components/Header/GTheaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Switch from "@material-ui/core/Switch";


import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function PrivacyPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Giorgio Tedesco"
        rightLinks={<GTheaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>GDPO & Privacy Management Tool.</h1>
              <h4>
                Please take care the website is in <b>Working in Progress</b> mode.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
	  <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.titleSection}>Things to know</h2>
						<h5 className={classes.descriptionSection}>I don't love to use Cookies, that's way I don't use Cookies, because I don't track your navigation, I don't use external libraries. This is a static website made with ReactJs / NextJs.</h5><br />
					</GridItem>
				</GridContainer>
			</div>
			
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.titleSection}>Did you make your choice?</h2>
						<h5 className={classes.descriptionSection}>Using this website I am not tracked and the only one Cookie is setted up it is this one to store my choice.</h5><br />
						<p className={classes.descriptionSection}>I Allow Technical Cookies <sup>1</sup><Switch /></p><br />
						<p className={classes.descriptionSection}><sup>1</sup>The cookie you save by clicking here is <b>cookieconsent_technical</b></p><br />
					</GridItem>
				</GridContainer>
			</div>
			
		</div>
	  </div>
      <Footer />
    </div>
  );
}
