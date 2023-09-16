import React, { useEffect } from 'react';
import Header from '../Header';
import Liked from '../Liked';
import Navbar from '../Navbar';
import Superheroes from '../Superheroes';
import './index.css';
import { connect, ConnectedProps } from "react-redux";
import { start_superheroes_fetch } from '../../actions/superheroes';

const mapDispatch = {
    fetch_superheroes: () => (start_superheroes_fetch()),
  }
  
const connector = connect(undefined, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {}

function Home(props: Props) {

    useEffect(() => {
        props.fetch_superheroes()
    });

    return (
      <div className="Home">
        <Header/>
        <Liked/>
        <Superheroes/>
        <Navbar/>
      </div>
    );
  }
  
  export default connector(Home)
  