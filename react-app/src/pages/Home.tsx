import CardList from '../components/CardList';
import Loader from '../components/Loader';

import { useContext } from 'react';
import { GlobalContext } from '../context';

function Home(props: any) {
 const {cardsList} = useContext(GlobalContext);

    return (
      <div>
        <h1>This is the Home page</h1>
        { props.loading ? 
          <Loader></Loader> :
          <CardList 
            items={cardsList} 
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