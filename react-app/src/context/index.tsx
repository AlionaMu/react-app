/* eslint-disable @typescript-eslint/no-empty-function */
import {createContext, Dispatch, useReducer} from 'react';
import { Item } from '../components/CardItem';
import { FormInfo } from '../components/Form';
import {
  productReducer,
  cardsListReducer,
  ProductActions,
  CardsListActions,
  sortReducer,
  searchReducer,
  pageReducer,
  detailReducer
} from '../reducers/reducers';

// PRODUCT == FORM

type InitialStateType = {   
  products: FormInfo[];  
  cardsList: Item[];  
  sort: string;
  search: string;
  pageToken: string;
  detailedInfo: any
};

const emptyArr: any[] =[];

const initialState = {
  products: emptyArr,
  cardsList: emptyArr,
  sort: 'relevance',
  search: '',
  pageToken: '',
  detailedInfo: {}
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | CardsListActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  {products, cardsList, sort, search, pageToken, detailedInfo}: InitialStateType,
  action: any
) => ({
  products: productReducer(products, action),
  cardsList: cardsListReducer(cardsList, action),
  sort: sortReducer(sort, action),
  search: searchReducer(search),
  pageToken: pageReducer(pageToken),
  detailedInfo: detailReducer(detailedInfo)
});

const AppProvider  = ({children}: any) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}    
    </AppContext.Provider>
  )
};

export { AppProvider, AppContext };
