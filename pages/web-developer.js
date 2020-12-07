import React, { useEffect, useState } from "react";
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
import useSWR from 'swr'
//https://gaia.blockstack.org/hub/1NsfK4B23SFDj1xqh85FANqnrFG1zKU2BU/status.json

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [blockstack, setBlockstack] = useState([{id:0,emotion:'',sentence:''}]);

  useEffect(() => {
    // localhost:https://gaia.blockstack.org/hub/1NsfK4B23SFDj1xqh85FANqnrFG1zKU2BU/status.json
    fetch('https://gaia.blockstack.org/hub/1N3qdhpi671XKMaayJ2hnuB85MbciL9RQC/status.json ')
      .then(res => res.json())
      .then(data => setBlockstack(data.posts))
  }, []);


  return (
    <div>

      <NextSeo
        title="Giorgio Tedesco | Just a web developer"
        description="a personal Giorgio Tedesco's website used to share my interests on web developing, 3D Graphic, Cryptocurrencies (Bitcoin & Altcoin), Artificial Inteligence, Deep Learning."
        canonical="https://wwww.giorgiotedesco.it/privacy"
      />

      <Layout title='Just a web developer' description='Based in Rome (Italy) and born in Brazil!' image='andras-vas-Bd7gNnWJBkU-unsplash.jpg'>
        <HomeSection />
        <hr />
        <h3>Latest Message from my BlockStack Account, a DApp I made</h3>
        <ul>
          {blockstack.map((post) => { return(<li key={post.id}>{post.emotion}: {post.sentence}</li>)})}
        </ul>
      </Layout>
    </div>
  );
}
