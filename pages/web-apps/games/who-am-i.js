
import React, { useState } from 'react';

import Layout from 'components/Layout/Layout.js'

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";

import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";

import { cardTitle } from "assets/jss/nextjs-material-kit.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

const imageList = [];

const theRightImg = 'who-am-i/me-set/fiejdoqjowij.jpg';

imageList.push('who-am-i/me-set/ovivoeijglkr.jpeg');
imageList.push('who-am-i/me-set/alskflfmmke.jpeg');
imageList.push('who-am-i/me-set/ogejnjajfkj.jpeg');

imageList.push('who-am-i/me-set/voeirgglekm.jpeg');
imageList.push('who-am-i/me-set/dvpokfwfw.jpeg');
imageList.push('who-am-i/me-set/fiejdoqjowij.jpg');

imageList.push('who-am-i/me-set/bkerogoisnjk.jpeg');
imageList.push('who-am-i/me-set/kddlsjsldfrn.jpeg');
imageList.push('who-am-i/me-set/vwofkdlvksas.jpeg');

// <script async src="https://comments.app/js/widget.js?3" data-comments-app-website="EngX-b-J" data-limit="5" data-page-id="contact-form" data-colorful="1"></script>

export default function WhoAmI (props) {

  const classes = useStyles();

  const [count, setCount] = useState(3);
  const [winner, setWinner] = useState(0);

  const [endMessage, setMessage] = useState('');

  const setGo = (item) => {
    if (winner == 1) {

    } else {
      if (count <= 1) {
        if (item == theRightImg) {
          setWinner(1);
          setCount(0);
          setMessage('YOU WIN!!')
        } else {
          setWinner(-1);
          setCount(0);
          setMessage('YOU LOOSE!!')
        }
      } else {
        if (item == theRightImg) {
          setWinner(1);
          setMessage('YOU WIN!!')
        } else {
          setCount(count - 1);
          setMessage('Try another time!')
        }
      }
    }
  }

  return(
    <>
      <Layout title='Who am I?' description='Who am I game based on AI StyleGan 2 images' image='kyle-glenn-MbPDSi0ILMo-unsplash.jpg'>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3>Try to find me!</h3>
            <p>I'm one of them</p>
            <GridContainer justify="center">
              { imageList.map((item) => {
                let addThis = 0;
                if (item == theRightImg) {
                  addThis = 1;
                  //setWinner(1);
                } else {
                  addThis = -1;
                }
                return(
                  <GridItem xs={12} sm={8} md={4}>
                    <Card>
                      <img className={classes.imgCard} onClick={ (e) => { e.preventDefault(); setGo(item); } } src={require('assets/img/' + item)} alt="who am I | Game" />
                    </Card>
                  </GridItem>
                )
              })}
              <GridItem>

              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <h3>Scores</h3>
            <p>You have only {count} attempts</p>
            {endMessage}
          </GridItem>
        </GridContainer>

      </Layout>
    </>
  )

}
