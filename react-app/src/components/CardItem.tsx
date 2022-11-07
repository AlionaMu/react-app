import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';

export interface Item {
  etag: string;
  id: ItemId;
  kind: string;
  snippet: ItemSnippet;
}

export interface ItemId {
  id: string;
  videoId: string;
}

export interface ItemSnippet {
  channelId?: string;
  channelTitle: string;
  description?: string;
  liveBroadcastContent?: string;
  publishTime?: string;
  publishedAt?: string;
  thumbnails?: Thumb;
  title: string
}
 
export interface Thumb {
  default: ThumbContent;
  medium: ThumbContent;
  high: ThumbContent;
}

export interface ThumbContent {
  height: number;
  url: string;
  width: number;
}

const CardItem = (props: any) => {
  const publishedAt = new Date(props.props.snippet.publishedAt).toLocaleString('ru');
  const {state } = useContext(AppContext);

  const onClickHandler = () => {
    state.detailedInfo = props.props;
  }

  return (
    <div className='card' id={props.props.id}>
        <img src={props.props.snippet.thumbnails.default.url} className='card__image' alt="fruit"></img>
        <div className='card__contain'>
          <span className='card__text_title'><b>Video Title: </b>{props.props.snippet.title}</span>
          <span className='card__text_species'><b>Channel Title: </b>{props.props.snippet.channelTitle}</span>
          <span className='card__text_species'><b>Date: </b>{publishedAt}</span>
        </div>
        <button className='card__button button' onClick={()=>onClickHandler()}><Link to="/video">{'more info...'}</Link></button>
    </div>
  );
};

export default CardItem;
  