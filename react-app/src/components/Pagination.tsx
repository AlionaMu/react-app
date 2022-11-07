import { useContext } from 'react';
import FetchService from '../API/FetchService';
import { AppContext } from '../context';
import { Types } from '../reducers/reducers';

const Pagination = () => {
  const {state, dispatch } = useContext(AppContext);
  const onClickHandler = (value: any) => {
     const token = state.pageToken.length ? `&pageToken=${state.pageToken}` : ''
    FetchService.getPosts(state.search, state.sort, token).then((res) => {
      state.pageToken = res.nextPageToken;
      dispatch({
        type: Types.Search,
        payload: res.items
      });
    })
  }
  
  return (
    <>
      <div className="pagination__container">
          <button 
            value={'prev'}  
            className='pagination__button'
            onClick={(value) => onClickHandler(value)}
          >
          prev
          </button>
          <button 
            value={'next'} 
            className='pagination__button' 
            onClick={(value) => onClickHandler(value)}
          >
          next
          </button>
        </div>
    </>
  )
}

export default Pagination;
