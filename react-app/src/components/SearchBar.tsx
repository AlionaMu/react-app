import FetchService from '../API/FetchService';
import { useGlobalContext } from '../context';

export function SearchBar(props: any) {
  const { setCardsList } = useGlobalContext();
  const onKeyPressHandler = (event: any) => {
   
    if (event.which === 13) {
      props.setLoading(true);
       
        FetchService.getPosts(event.target.value).then((res) => {
          setCardsList([...res.items]);
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
