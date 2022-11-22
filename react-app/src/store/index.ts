import productsReducer from '../store/productsSlice';
import { configureStore } from '@reduxjs/toolkit';
import cardsListReducer from '../store/cardsListSlice';
// import { FormInfo } from '../components/Form';
// import { Item } from '../components/CardItem';

/* type InitialStateType = {   
  products: FormInfo[];  
  cardsList: Item[];  
  sort: string;
  search: string;
  pageToken: string;
  detailedInfo: any
};
const emptyArr: any[] =[];
// Начальное значение
const initialState: InitialStateType = {
  products: emptyArr,
  cardsList: emptyArr,
  sort: 'relevance',
  search: '',
  pageToken: '',
  detailedInfo: {}
};*/

export const store = configureStore({
  reducer: {
    cardsList: cardsListReducer,
    products: productsReducer
  },
});
  
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
