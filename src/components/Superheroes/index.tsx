import './index.css';
import likedLogo from '../../assets/medium-heart/medium-heart.svg'
import fistLogo from '../../assets/fist/fist_yellow.svg'
import { connect, ConnectedProps } from "react-redux";
import searchLogo from '../../assets/search/search.svg'
import cancelIcon from '../../assets/cancel/cancel.svg'
import { FixedSizeGrid as Grid } from 'react-window';
import * as actions from '../../actions/search';
import { like_superhero } from '../../actions/superheroes';
import RootState from '../../interfaces/RootState';
import Card from '../../interfaces/Card';
import React, { useLayoutEffect, useState } from 'react';


const mapState = (state: RootState) => ({
  query: state.query,
  heroes: state.superheroes.data.filter(
    element => (
      element.name?.toLowerCase().includes(state.query.toLowerCase()) || 
      element.biography?.fullName.toLowerCase().includes(state.query.toLowerCase()))
    ).filter(element => !state.superheroes.favorites.includes(element.id?element.id:-1))
})

const mapDispatch = {
  on_change: (event:any) => (actions.search_query(event.target.value)),
  on_clean: (_:any) => (actions.clean_query()),
  like: (id:number) => (like_superhero(id))
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
  query: string,
  heroes: Array<Object>
}

interface GridData {
  columnIndex : number, 
  rowIndex : number
  style: any
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


function Superheroes(props : Props) {
  const [width, _] = useWindowSize();

  const Cell = (data : GridData) => {
    const element : Card = props.heroes[data.rowIndex*4 + data.columnIndex]
    if (!element){
      return <div></div>
    }
    var power : number = 0;
    if (element.powerstats) {
      power = Math.round(Object.values(element.powerstats).reduce((a, b) => (a + b))/6)/10
    }
    return (
      <div className='Card' style={{...data.style}}>
        <div className='Card-content' >
          <div className='Card-image-container'>
            <img 
              className='Card-image'
              src={element.images?.md}
              alt={element.name}
            />
            <div className="Liked-icon-container" onClick={()=>props.like(element.id?element.id:-1)}>
                <img src={likedLogo} alt="Liked Icon" className="Liked-icon"/>
              </div>
            <div></div>
          </div>
          <div className='Card-info'>
            <div className='Card-name'> {element.name} </div>
            <div className='Card-real-name'> {'Real name:' + element.biography?.fullName} </div>
            <div className='Card-power'>
              <img src={fistLogo} alt="Liked Icon" className="Fist-icon"/>
              <div className='Card-power-value'> {power} </div>
              <div className='Card-power-total'> {' / 10'} </div>
            </div>
          </div>
        </div>
      </div>
  )};

    return (
      <div className="Superheroes">
        <div className="Superheroes-header">
          <div className="Superheroes-title">
            All Superheroes
          </div>
          <div className='search'>
            <img src={searchLogo} alt="search icon" className="search-icon"/>
            <input value={props.query} className='search-input' placeholder='Search' onChange={props.on_change} />
            {props.query.length > 0 && <img src={cancelIcon} onClick={props.on_clean} alt="cancel icon" className="cancel-icon"/>}
          </div>
        </div>
        {
          props.heroes && props.heroes.length > 0 ? 
          <Grid
            columnCount={
              width>1100?
              4:
              (width>850?
                3:
                (width>550?
                  2:
                  1))
              }
            columnWidth={
              width>1100?
              (width/4 - 10)<300 ? 260 : width/4 - 10:
              (width>850?
                (width/3 - 10)<300 ? 260 : width/3 - 10:
                (width>550?
                  (width/2 - 10):
                  (width - 30)))
            }
            height={window.innerHeight*0.8}
            rowCount={props.heroes.length/4}
            rowHeight={180}
            width={1250}
            style={{width:"100% !important"}}
          >
            {Cell}
          </Grid> : 
          <div className='error'>
            <div className='no-liked-text'>No Superheroes Found</div>
          </div>
        }
      </div>
    );
  }
  
  export default connector(Superheroes)
    
  