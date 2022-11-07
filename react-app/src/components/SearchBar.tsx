import { useContext } from 'react';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import FetchService from '../API/FetchService';
import { AppContext } from '../context';
import { Types } from '../reducers/reducers';

export function SearchBar(props: any) {
  const {state, dispatch } = useContext(AppContext);
  
  const onKeyPressHandler = (event: any) => {
    const value = event.target.value;
    state.search = value;
    const token = state.pageToken.length ? state.pageToken : ''
    if (event.which === 13) {
      props.setLoading(true);
      FetchService.getPosts(value, state.sort, token).then((res) => {
        state.pageToken = res.nextPageToken;
        dispatch({
          type: Types.Search,
          payload: res.items
        });
        props.setLoading(false);
      })
    }
  }

  return (
    <div>
      <input 
        className="search-bar" 
        data-testid="simple-input" 
        type="text" 
        placeholder= 'search'
        onKeyPress={(event: any) => onKeyPressHandler(event)}
      >
      </input>
      <button className="search-bar__button button">SEARCH</button> 
    </div>
  )
}
