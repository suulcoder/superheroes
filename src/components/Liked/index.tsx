import './index.css';
import likedLogo from '../../assets/medium-heart/medium-heart.svg'
import collapseArrow from '../../assets/arrow-up/arrow-up.svg'
import bigHeartIcon from '../../assets/big-heart/big-heart.svg'

function Liked() {
    return (
      <div className="Liked">
        <div className="Liked-header">
          <div className="Liked-name-container">
            <div className="Liked-icon-container">
              <img src={likedLogo} alt="Liked Icon" className="Liked-icon"/>
            </div>
            <div className="Liked-name">
              Liked
            </div>
          </div>
          <img src={collapseArrow} alt="Collapse icon" className="Collapse-icon"/>
        </div>
        <div className='no-liked'>
          <img src={bigHeartIcon} alt="big heart icon" className="big-heart-icon"/>
          <div className='no-liked-text'>You haven’t liked any superhero yet</div>
        </div>
        <div className='Liked-list'>

        </div>
      </div>
    );
  }
  
export default Liked;
  