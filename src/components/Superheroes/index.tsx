import './index.css';
import 'react-virtualized/styles.css';
import { connect, ConnectedProps } from "react-redux";
import searchLogo from '../../assets/search/search.svg'
import cancelIcon from '../../assets/cancel/cancel.svg'
import List from 'react-virtualized/dist/commonjs/List';
import * as actions from '../../actions/search';

interface RootState {
  query: string,
  superheroes: {
    data: Array<Object>,
  }
}

const mapState = (state: RootState) => ({
  query: state.query,
  heroes: state.superheroes.data
})

const mapDispatch = {
  on_change: (event:any) => (actions.search_query(event.target.value)),
  on_clean: (_:any) => (actions.clean_query()),
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
  query: string,
  heroes: Array<Object>
}

function Superheroes(props : Props) {


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
          props.heroes.length > 0 ? 
          <div/> : 
          <div className='error'>
            <div className='no-liked-text'>Error Conection</div>
          </div>
        }
      </div>
    );
  }
  
  export default connector(Superheroes)
    
  