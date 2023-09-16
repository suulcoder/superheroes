import React, { Fragment } from 'react';
import Header from '../Header';
import Liked from '../Liked';
import Navbar from '../Navbar';
import Superheroes from '../Superheroes';
import './index.css';
import { connect, ConnectedProps } from "react-redux";
import ContentLoader from "react-content-loader"
import RootState from '../../interfaces/RootState';


  
const mapState = (state: RootState) => {
    console.log(state)
    return ({
        isloading: state.superheroes.isLoading
})}
  
const connector = connect(mapState, undefined)

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
    isloading: boolean
}

function Home(props: Props) {
    return (
      <div className="Home">
        <Header/>
        {
            props.isloading ? 
            <ContentLoader 
                speed={2}
                width={window.innerWidth}
                height={window.innerHeight}
                viewBox={"0 0 " + window.innerWidth + " " + window.innerHeight}
                backgroundColor="#6A4DBC"
                foregroundColor="#11072F"
            >
                <rect x="0" y="30" rx="10" ry="10" width="285" height="27" /> 
                <rect x="0" y="72" rx="10" ry="10" width="285" height="174" /> 
                <rect x="296" y="72" rx="10" ry="10" width="285" height="174" /> 
                <rect x="592" y="72" rx="10" ry="10" width="285" height="174" /> 
                <rect x="888" y="72" rx="10" ry="10" width="285" height="174" /> 

                <rect x="0" y="300" rx="10" ry="10" width="285" height="27"/> 
                <rect x="0" y="342" rx="10" ry="10" width="285" height="174" /> 
                <rect x="296" y="342" rx="10" ry="10" width="285" height="174" /> 
                <rect x="592" y="342" rx="10" ry="10" width="285" height="174" /> 
                <rect x="888" y="342" rx="10" ry="10" width="285" height="174" /> 

                <rect x="0" y="532" rx="10" ry="10" width="285" height="174" /> 
                <rect x="296" y="532" rx="10" ry="10" width="285" height="174" /> 
                <rect x="592" y="532" rx="10" ry="10" width="285" height="174" /> 
                <rect x="888" y="532" rx="10" ry="10" width="285" height="174" /> 

          </ContentLoader>
            : 
            <Fragment>
                <Liked/>
                <Superheroes/>
                <Navbar/>
            </Fragment>
        }
        
      </div>
    );
  }
  
export default connector(Home)
  