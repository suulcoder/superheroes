import './index.css';
import superheroesIcon from '../../assets/fist/fist.svg';
import favoritesIcon from '../../assets/bottom-heart/bottom-heart.svg'

import superheroesIco_selected from '../../assets/fist/fist_selected.svg';
import favoritesIcon_selected from '../../assets/bottom-heart/bottom-heart_selected.svg'

function Navbar() {
    return (
      <div className="Navbar">
        <div className='Navbar-superheroes-button'>
            <img src={superheroesIco_selected} alt="SuperHeroes Icon" className="superheroes-icon"/>
            <div className={'navbar-button ' + 'navbar-button--selected'}> Superheroes </div>
        </div>
        <div className='Navbar-liked-button'>
            <img src={favoritesIcon} alt="Favorites Icon" className="favorites-icon"/>
            <div className='navbar-button'> Favorites </div>
        </div>
      </div>
    );
  }
  
export default Navbar;
  