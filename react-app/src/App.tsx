import './App.css';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import Forms from './pages/Forms';
import { useRoutes } from 'react-router-dom';
import { useState } from 'react';
import Modal from './components/Modal';
import { Item } from './components/CardItem';
import { GlobalContext } from './context';
import { FormInfo } from './components/Form';

const Routes = (props: any) => {
  const routes = useRoutes([
      { path: '/', element: <Home 
        modal={props.modal} setModal={props.setModal} 
        setCardId={props.setCardId} cardId={props.cardId}
        loading={props.loading} setLoading={props.setLoading}
        /> },
      { path: 'about', element: <AboutUs /> },
      { path: '*', element: <NotFound /> },
      { path: 'forms', element: <Forms /> },
  ]);
  return routes;
};

function App() {
  const cards: any[] = [];
  const [cardsList, setCardsList] = useState(cards);
  const [modal, setModal] = useState(false);
  const [cardId, setCardId] = useState('m');
  const [loading, setLoading] = useState(false);

  const arr: FormInfo[] = [];
  const [formsList, setFormsList] = useState(arr);

 // const cardInfo = cardsList.find(item => item.id === cardId);

 /* const memoCards: any[] = useMemo(() => {
    return cardsList;
  }, [cardsList, setCardsList]);*/

  // reducer

  const initialState = {count: 0};   

  enum ActionKind {
    SEARCH = 'SEARCH',
    SORT = 'SORT',
    PAGINATION = 'PAGINATION'
  }

  /* function init(initialCount) {
    return {count: initialCount};
  } */

/*  function reducer(state, action: ActionKind) {
    switch (action.type) {
      case 'ActionKind.SEARCH':
        console.log('SEARCH')
        return {count: state.count + 1};
      case 'ActionKind.SORT':
        console.log('SORT')
        return {count: state.count + 1};
     
      default:
        throw new Error();
    }
  }
  
  /* function Counter({initialCount}) {
     const [state, dispatch] = useReducer(reducer, initialState);
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
      <>
        Count: {state.count}
        <button
          onClick={() => dispatch({type: 'reset', payload: initialCount})}>
          Reset
        </button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </>
    );
  }*/
  

  return (
    <GlobalContext.Provider value={{ cardsList, setCardsList, formsList, setFormsList }}>
    <div className="App">
      <div className="wrapper">
        <Modal visible={modal} setVisible={setModal}
      //    cardId={cardId} cardInfo={cardInfo}
        />
        <Header 
     //     setCardsList={setCardsList} cardsList={cardsList}
          loading={loading} setLoading={setLoading}
        />
        <Routes
      //    setCardsList={setCardsList} cardsList={memoCards}
          modal={modal} setModal={setModal}
          setCardId={setCardId} cardId={cardId}
          loading={loading} setLoading={setLoading}>
        </Routes>
      </div>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
