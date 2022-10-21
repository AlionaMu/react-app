import './App.css';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import Forms from './pages/Forms';
import { useRoutes } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Modal from './components/Modal';
import { Item } from './components/CardItem';

const Routes = (props: any) => {
  const routes = useRoutes([
      { path: '/', element: <Home 
        cardsList={props.cardsList} setCardsList={props.setCardsList} 
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

  const cardInfo = cardsList.find(item => item.id === cardId);

  const memoCards: any[] = useMemo(() => {
    return cardsList;
  }, [cardsList, setCardsList]);

  return (
    <div className="App">
      <div className="wrapper">
        <Modal visible={modal} setVisible={setModal}
          cardId={cardId} cardInfo={cardInfo}
        />
        <Header 
          setCardsList={setCardsList} cardsList={cardsList}
          loading={loading} setLoading={setLoading}
        />
        <Routes
          setCardsList={setCardsList} cardsList={memoCards}
          modal={modal} setModal={setModal}
          setCardId={setCardId} cardId={cardId}
          loading={loading} setLoading={setLoading}>
        </Routes>
      </div>
    </div>
  );
}

export default App;
