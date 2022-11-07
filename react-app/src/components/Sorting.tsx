import { useContext } from 'react';
import FetchService from '../API/FetchService';
import { AppContext } from '../context';
import { Types } from '../reducers/reducers';
import Select from './Select';

export enum SortingEnum {
  title = 'by Title',
  date = 'by Date',
  view = 'by Views',
}

const Sorting = () => { 
  const { state, dispatch } = useContext(AppContext);

  const onChangeHandler = (sort: string) => {
    state.sort = sort;
    const token = state.pageToken.length ? `&pageToken=${state.pageToken}` : ''
    FetchService.getPosts(state.search, state.sort, token).then((res) => {
      dispatch({
        type: Types.Search,
        payload: res.items
      });   
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
