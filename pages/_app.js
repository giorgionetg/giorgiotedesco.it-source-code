
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

import { NextSeo, DefaultSeo } from 'next-seo';

import "assets/scss/nextjs-material-kit.scss?v=1.1.0";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    /*let comment = document.createComment();
    document.insertBefore(comment, document.documentElement);*/
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        
		<DefaultSeo
		  title="Giorgio Tedesco"
		  description="An appassionate Web Developer"
		  canonical="https://www.giorgiotedesco.it/"
		  openGraph={{
			url: 'https://www.giorgiotedesco.it/',
			title: 'Giorgio Tedesco',
			description: 'A passionate Web Developer',
			site_name: 'Giorgio Tedesco',
		  }}
		  twitter={{
			handle: '@giorgionetg',
			site: '@giorgiotedesco.it',
			cardType: 'summary_large_image',
		  }}
		/>
		
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
