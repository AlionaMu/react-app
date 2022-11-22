import { useDispatch, useSelector } from 'react-redux';
import FetchService from '../API/FetchService';
import { RootState } from '../store';
import { search, setSort } from '../store/cardsListSlice';
import Select from './Select';

export enum SortingEnum {
  title = 'by Title',
  date = 'by Date',
  view = 'by Views',
}

const Sorting = () => { 

  const state = useSelector((state: RootState) => state.cardsList);
  const dispatch = useDispatch();

  const onChangeHandler = (sort: string) => {

    sort.length ? true : sort = 'relevance'

   FetchService.getPosts(state.search, sort, state.nextPageToken).then((res) => {
     dispatch(setSort(sort));
     dispatch(search(res));
   })
  }

  return (
    <div className="sorting__input">
      <Select
        value={state.sort}
        onChange={(selectedSort: string) => onChangeHandler(selectedSort)}
        defaultValue="Sort by"
        options={[
          {value: 'title', title: 'title'},
          {value: 'date', title: 'date'},
          {value: 'rating', title: 'views'}
        ]}
      />
    </div>
  )
}

export default Sorting;
