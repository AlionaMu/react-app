import { Item } from '../components/CardItem';
import CardList from '../components/CardList';
import Loader from '../components/Loader';

function Home(props: any) {
    const items: Item[] = props.cardsList;

    return (
      <div>
        <h1>This is the Home page</h1>
        { props.loading ? 
          <Loader></Loader> :
          <CardList 
            items={items} 
            modal={props.modal} 
            setModal={props.setModal} 
            setCardId={props.setCardId} 
            cardId={props.cardId}
          >
          </CardList>
        }
      </div>
    )
}

export default Home;