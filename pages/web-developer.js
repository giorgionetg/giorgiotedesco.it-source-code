import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Layout from "components/Layout/Layout.js";


import HomeSection from "pages-sections/LandingPage-Sections/HomeSection.js";

import { NextSeo } from 'next-seo';

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>

      <NextSeo
        title="Giorgio Tedesco | Just a web developer"
        description="a personal Giorgio Tedesco's website used to share my interests on web developing, 3D Graphic, Cryptocurrencies (Bitcoin & Altcoin), Artificial Inteligence, Deep Learning."
        canonical="https://wwww.giorgiotedesco.it/privacy"
      />

      <Layout title='Just a web developer' description='Based in Rome (Italy) and born in Brazil!' image='andras-vas-Bd7gNnWJBkU-unsplash.jpg'>
        <HomeSection />
      </Layout>
    </div>
  );
}
