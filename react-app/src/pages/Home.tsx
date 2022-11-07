import CardList from '../components/CardList';
import Loader from '../components/Loader';
import { useContext } from 'react';
import { AppContext } from '../context';
import Sorting from '../components/Sorting';
import Pagination from '../components/Pagination';

function Home(props: any) {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h1>This is the Home page</h1>
      <Sorting />
      <Pagination />
      { props.loading ? 
        <Loader></Loader> :
        <CardList 
          items={state.cardsList} 
          setCardId={props.setCardId} 
          cardId={props.cardId}
        >
        </CardList>
      }
    </div>
  )
}

export default Home;