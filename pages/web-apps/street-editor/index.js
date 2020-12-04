
import Link from "next/link";

import Layout from 'components/Layout/Layout.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Badge from 'components/Badge/Badge.js'

import StreetEditor from 'components/StreetEditor/StreetEditor.js';

//import myResume from '../../../cv/giorgio-tedesco-resume.json';


export default function Viewer ( ) {

  return(
    <>
      <Layout title='Street Editor' description={(<Button disabled color='info'>OpenDrive Compatible</Button>)} image='ben-o-bro-wpU4veNGnHg-unsplash.jpg'>

      <StreetEditor />

      </Layout>
    </>
  )

}
