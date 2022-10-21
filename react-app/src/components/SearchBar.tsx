import FetchService from '../API/FetchService';

export function SearchBar(props: any) {

  const onKeyPressHandler = (event: any) => {
   
    if (event.which === 13) {
      props.setLoading(true);

// setTimeout is added to demonstrate Loading 

      setTimeout(() => {
       
        FetchService.getPosts(event.target.value).then((res) => {
          props.setCardsList([...res.items]);
          props.setLoading(false);
        })

      }, 3000)

    }
  }

  return (
    <div>
      <input 
        className="search-bar" 
        data-testid="simple-input" 
        type="text" 
        placeholder='search'
        onKeyPress={(event: any) => onKeyPressHandler(event)}
      >
      </input>
      <button className="search-bar__button button">SEARCH</button> 
    </div>
  )
}
