import FetchService from '../API/FetchService';
import { search, setSearch } from '../store/cardsListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

export function SearchBar(props: any) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.cardsList)
  
  const onKeyPressHandler = (event: any) => {

    const value = event.target.value;

    if (event.which === 13) {
      props.setLoading(true);

    FetchService.getPosts(value, state.sort, state.nextPageToken).then((res) => {

        dispatch(setSearch(value));
        dispatch(search(res));
   
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
