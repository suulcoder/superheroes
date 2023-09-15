import './index.css';
import logo from '../../assets/logo/logo.svg';

function Header() {
    return (
      <div className="Header">
        <img src={logo} alt="SuperHeroes Logo" className="Logo"/>
      </div>
    );
  }
  
export default Header;
  