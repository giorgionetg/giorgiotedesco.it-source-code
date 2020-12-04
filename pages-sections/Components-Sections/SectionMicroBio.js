import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from 'components/CustomButtons/Button.js';

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

// import image from "assets/img/giorgio-tedesco-images/giorgio-tedesco-01.jpg";
import image from "assets/img/giorgio-tedesco-images/giorgio-tedesco-low-res.jpg";

export default function SectionMicroBio() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.specificStyle}>Giorgio Tedesco <sup><small><i>just a web developer</i></small></sup></h2>
            <h3>Let me talk about my hobbies and skills.</h3><br />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem justify="center" xs={12} sm={12} md={4}>
            <img
              src={image}
              alt="Giorgio Tedesco"
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            /><br /><br />
            <small>There is a reason for low res (I'm working in a little web game)!</small>
          </GridItem>
          <GridItem  xs={12} sm={12} md={8}>
            <h4>
               I'm a passionate web developer with a lot of hobbies in different fields.<br />
               I discovered, at first, CG3D and Special Fx; then, at college time, I started to code (aka scripting), specially in HTML, JS and CSS.</h4>
            <h4>
               At university as a self thaught I improved skills on server side with PHP, APACHE and MYSQL in a linux enviroment.<br />
            </h4>
            <h4>
              Today I'm working with the modern web technologies like ReactJs, NextJs, but also a bit of Solidity, Web3 integration and cryptocurrency's stack.
            </h4>
            <h4>
              Not less important but I had got also some experiences with AI (ML in the python enviroment) and Google Colab (just because I currently have not a good Nvidia GPU).
            </h4>
            <Button as='link' href="/web-apps/json-resume/viewer/" color="info">My CV / Resumé</Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
