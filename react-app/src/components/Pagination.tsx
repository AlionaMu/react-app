import { useDispatch, useSelector } from 'react-redux';
import FetchService from '../API/FetchService';
import { RootState } from '../store';
import { search } from '../store/cardsListSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.cardsList)

  const onClickHandler = (target: any) => {

    FetchService.getPosts(state.search, state.sort, state.nextPageToken).then((res) => {  
       dispatch(search(res))

    })
  }
  
  return (
    <>
      <div className="pagination__container">
          <button 
            value={'prev'}  
            className='pagination__button'
            onClick={(e) => onClickHandler(e.target)}
          >
          prev
          </button>
          <button 
            value={'next'} 
            className='pagination__button' 
            onClick={(e) => onClickHandler(e.target)}
          >
          next
          </button>
        </div>
    </>
  )
}

export default Pagination;
