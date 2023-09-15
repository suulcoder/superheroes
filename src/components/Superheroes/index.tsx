import './index.css';
import 'react-virtualized/styles.css';
import { connect } from "react-redux";
import searchLogo from '../../assets/search/search.svg'
import cancelIcon from '../../assets/cancel/cancel.svg'
import List from 'react-virtualized/dist/commonjs/List';



function Superheroes(data : Object) {

  function renderRow(props: Object) {
    return (
      <div></div>
    );
  }

    return (
      <div className="Superheroes">
        <div className="Superheroes-header">
          <div className="Superheroes-title">
            All Superheroes
          </div>
          <div className='search'>
            <img src={searchLogo} alt="search icon" className="search-icon"/>
            <input className='search-input' placeholder='Search' ></input>
            <img src={cancelIcon} alt="cancel icon" className="cancel-icon"/>
          </div>
        </div>
        <List 
          className='superheroes-list' 
          rowHeight={60}
          height={80} 
          rowCount={4} 
          width={200} 
          overscanRowCount={3}
          rowRenderer={renderRow}
        />
      </div>
    );
  }
  
export default connect(
  state => ({
    heroes: []
  }),
  undefined
)(Superheroes)
  