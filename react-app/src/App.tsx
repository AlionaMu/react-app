import './App.css';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import Forms from './pages/Forms';
import { useRoutes } from 'react-router-dom';
import { useState } from 'react';
import { AppProvider } from './context';
import DetailedInfoPage from './pages/DetailedInfoPage';

const Routes = (props: any) => {
  const routes = useRoutes([
      { path: '/', element: <Home 
        setCardId={props.setCardId} cardId={props.cardId}
        loading={props.loading} setLoading={props.setLoading}
        /> },
      { path: 'about', element: <AboutUs /> },
      { path: '*', element: <Home /> },
      { path: 'forms', element: <Forms /> },
      { path: 'video', element: <DetailedInfoPage />},
  ]);
  return routes;
};

function App() {
  const [cardId, setCardId] = useState('m');
  const [loading, setLoading] = useState(false);

  return (
    <AppProvider>
      <div className="App">
        <div className="wrapper">
          <Header loading={loading} setLoading={setLoading} />
          <Routes
            setCardId={setCardId} cardId={cardId}
            loading={loading} setLoading={setLoading}>
          </Routes>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
