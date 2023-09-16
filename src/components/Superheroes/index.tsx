import './index.css';
import 'react-virtualized/styles.css';
import { connect, ConnectedProps } from "react-redux";
import searchLogo from '../../assets/search/search.svg'
import cancelIcon from '../../assets/cancel/cancel.svg'
import List from 'react-virtualized/dist/commonjs/List';

interface RootState {
  query: string,
  heroes: never[]
}

const mapState = (state: RootState) => ({
  query: '',
  heroes: []
})

const mapDispatch = {
  
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
  query: string,
  heroes: never[]
}

function Superheroes(props : Props) {

  function renderRow(row_props: Object) {
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
            {props.query.length > 0 && <img src={cancelIcon} alt="cancel icon" className="cancel-icon"/>}
          </div>
        </div>
        {
          props.heroes.length > 0 ? 
          <List 
            className='superheroes-list' 
            rowHeight={60}
            height={80} 
            rowCount={4} 
            width={200} 
            overscanRowCount={3}
            rowRenderer={renderRow}
          /> : 
          <div className='error'>
            <div className='no-liked-text'>Error Conection</div>
          </div>
        }
      </div>
    );
  }
  
  export default connector(Superheroes)
    
  