import './index.css';
import { connect, ConnectedProps } from "react-redux";
import likedLogo from '../../assets/medium-heart/medium-heart.svg'
import collapseArrow from '../../assets/arrow-up/arrow-up.svg'
import downArrow from '../../assets/arrow-down/arrwo-down.svg'
import bigHeartIcon from '../../assets/big-heart/big-heart.svg'

interface RootState {
  collapsed: boolean,
  favorites: never[]
}

const mapState = (state: RootState) => ({
  collapsed: false,
  favorites: []
})

const mapDispatch = {
  
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
  collapsed: boolean,
  favorites: never[]
}

function Liked(props: Props) {
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
            <div className='arrow-down-container'>
              <img src={downArrow} alt="Collapse icon" className="Collapse-icon"/>
            </div> 
             :
            <img src={collapseArrow} alt="Collapse icon" className="Collapse-icon"/>
          }
        </div>
        {
          props.favorites.length===0 ? 
          <div className={props.collapsed?'no-liked collapsed':'no-liked'}>
            <img src={bigHeartIcon} alt="big heart icon" className="big-heart-icon"/>
            <div className='no-liked-text'>You haven’t liked any superhero yet</div>
          </div> :
          <div className={props.collapsed?'Liked-list collapsed':'Liked-list'}>
          </div>
        }
      </div>
    );
  }
  
export default connector(Liked)
    