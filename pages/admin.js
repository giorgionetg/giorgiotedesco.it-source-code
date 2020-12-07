import React, {useState, useEffect} from "react";
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


import { appConfig } from '../assets/constants';
import { UserSession } from '@stacks/auth';
const userSession = new UserSession({ appConfig });
import { Storage } from '@stacks/storage';
const storage = new Storage({ userSession });



import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

const saveToBlockstack = async (posts) => {
  let isPublic = true;
  await storage.putFile('status.json', JSON.stringify({ posts, isPublic }), {
    encrypt: !isPublic,
    verify: !isPublic
  });
};

const fetchPosts = async () => {
  const tasksJSON = await storage.getFile('status.json', {
    decrypt: false,
    username: 'giorgionetg.id.blockstack',
  });
  console.log(tasksJSON)
  return JSON.parse(tasksJSON)
}


export default function Components(props) {

  let userLoader = { name: 'loading', username: 'loading', description: 'loading' };

  if (userSession.isUserSignedIn()) {
    let userData = userSession.loadUserData();
    userLoader = { name: userData.profile.name, username: userData.username, description: userData.profile.description };
  }

  const [profile, setProfile] = useState(userLoader);

  /*fetchPosts().then((solved) => {
    setPosts(solved.posts);
  });*/
  const [posts, setPosts] = useState([{ id: 0, emotion: 'Neutral', sentence: 'Nothing to say' }]);

  /*setProfile(async () => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        return { name: userData.profile.name, username: userData.username, description: userData.profile.description };
      });
    } else if (userSession.isUserSignedIn()) {
      let userData = userSession.loadUserData()
      return { name: userData.profile.name, username: userData.username, description: userData.profile.description };
    }
  })*/

  /*useEffect(() => {
    function handleUser() {
      if (userSession.isUserSignedIn()) {
        let userData = userSession.loadUserData()
        setProfile({ name: userData.profile.name, username: userData.username, description: userData.profile.description });
      }
    }

    function cleanup() {
      console.log(profile)
      handleUser()
      return profile;
    }

  })*/

  const postit = () => {
    if (posts.length == 0) {
      setPosts([...posts, {id: 0, emotion:emotion, sentence: sentence}])
    } else {
      setPosts([...posts, {id: posts[posts.length -1].id + 1, emotion:emotion, sentence: sentence}])
    }
  }

  const deleteit = (data) => {
    const newPosts = posts.filter((item) => item.id !== data.id);

    setPosts(newPosts);
  }

  const handleSentence = (data) => {
    console.log('pd sono qui?')
  }

  const [sentence, setSentence] = useState("Because.. I'm happy!!!");
  const [emotion, setEmotion] = useState("Happy");

  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>

      <NextSeo
        title="ADMIN PANEL | Giorgio Tedesco | Just a web developer"
        description="Admin Panel to BlockStack for this website."
        canonical="https://wwww.giorgiotedesco.it/admin"
      />

      <Layout title='Admin Panel' description='Based on BlockStack' image='andras-vas-Bd7gNnWJBkU-unsplash.jpg'>

        <p>
        My Fullname: <b>{profile.name}</b><br />
        My username: <b>{profile.username}</b><br />
        My description: <b>{profile.description}</b>
        </p>
        <hr />
        <h2>Set your mood:</h2>
        <CustomInput labelText="Emotion" inputProps={ { onChange: (e) => { setEmotion(e.target.value) } } } />
        <CustomInput labelText="Sentence" inputProps={ { onChange: (e) => { setSentence(e.target.value) } } } /><br />
        <Button onClick={() => { postit() }}>ADD!</Button>
        <ul>{ posts.map((post) => {
          return (<li key={post.id}>{post.emotion}: {post.sentence} <Button onClick={() => { deleteit(post); } }>Delete</Button></li>)
        })}</ul>
        <Button onClick={() => {saveToBlockstack(posts)} }>Update on BlockStack</Button>
        <Button onClick={async () => { let postsss = await fetchPosts(); setPosts(postsss.posts) } }>Load from BlockStack data</Button>
      </Layout>
    </div>
  );
}
