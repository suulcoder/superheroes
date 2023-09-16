import './index.css';
import logo from '../../assets/logo/logo.svg';
import { connect, ConnectedProps } from "react-redux";
import { useEffect } from 'react';
import { start_superheroes_fetch } from '../../actions/superheroes';

const mapDispatch = {
  fetch_superheroes: () => (start_superheroes_fetch()),
}

const connector = connect(undefined, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {}

function Header(props: Props) {

  useEffect(() => {
    props.fetch_superheroes()
  });

    return (
      <div className="Header">
        <img src={logo} alt="SuperHeroes Logo" className="Logo"/>
      </div>
    );
  }
  
export default connector(Header)
  