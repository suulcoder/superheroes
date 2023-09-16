import './index.css';
import { connect, ConnectedProps } from "react-redux";
import likedLogo from '../../assets/medium-heart/medium-heart.svg'
import filledHeart from '../../assets/medium-filled-heart/medium-filled-heart.svg'
import fistLogo from '../../assets/fist/fist_yellow.svg'
import collapseArrow from '../../assets/arrow-up/arrow-up.svg'
import downArrow from '../../assets/arrow-down/arrwo-down.svg'
import bigHeartIcon from '../../assets/big-heart/big-heart.svg'
import * as actions from '../../actions/liked';
import { unlike_superhero } from '../../actions/superheroes';
import RootState from '../../interfaces/RootState';
import Card from '../../interfaces/Card';
import '../Card/index.css'

const mapState = (state: RootState) => ({
  collapsed: state.isCollapsed,
  last_liked: state.superheroes.last_liked,
  favorites: state.superheroes.favorites.map(
    element => state.superheroes.data.filter(
      sub_element => sub_element.id===element
    )[0])
})

const mapDispatch = {
  toggle_collapse: () => (actions.toggle_collapse()),
  unlike: (id:number) => (unlike_superhero(id))
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
  collapsed: boolean,
  favorites: Array<Card>
}

function Liked(props: Props) {

  const Card = (element: Card) => {
    if (!element){
      return <div></div>
    }
    var power : number = 0;
    if (element.powerstats) {
      power = Math.round(Object.values(element.powerstats).reduce((a, b) => (a + b))/6)/10
    }
    return (
      <div className='Card' style={{width:'300px', height:'170px'}}>
        <div className='Card-content'>
          {element.id&& element.id===props.last_liked && 
            <div id={'recently-liked'} className='Card-liked-recently'>
              Liked Recently
            </div>
          }
          <div className='Card-image-container'>
            <img 
              className='Card-image'
              src={element.images?.md}
              alt={element.name}
            />
            <div className="Liked-icon-container" onClick={()=>props.unlike(element.id?element.id:-1)}>
                <img src={filledHeart} alt="Liked Icon" className="Liked-icon"/>
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
      <div className={props.collapsed?"Liked-collapsed":"Liked"}>
        <div className="Liked-header">
          <div className="Liked-name-container">
            <div className="Liked-icon-container">
              <img src={likedLogo} alt="Liked Icon" className="Liked-icon"/>
            </div>
            <div className="Liked-name">
              Liked
            </div>
          </div>
          {
            props.collapsed?
            <div className='arrow-down-container' onClick={()=>props.toggle_collapse()}>
              <img src={downArrow} alt="Collapse icon" className="Collapse-icon"/>
            </div> 
             :
            <img src={collapseArrow} onClick={()=>props.toggle_collapse()} alt="Collapse icon" className="Collapse-icon"/>
          }
        </div>
        {
          props.favorites && props.favorites.length===0 ? 
          <div className={props.collapsed?'no-liked collapsed':'no-liked'}>
            <img src={bigHeartIcon} alt="big heart icon" className="big-heart-icon"/>
            <div className='no-liked-text'>You haven’t liked any superhero yet</div>
          </div> :
          <div className={props.collapsed?'Liked-list collapsed':'Liked-list'}>
            {props.collapsed?<div/>:props.favorites.map(element => (
              Card(element)
            ))}
          </div>
        }
      </div>
    );
  }
  
export default connector(Liked)
    