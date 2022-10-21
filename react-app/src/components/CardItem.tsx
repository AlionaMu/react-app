import CardButton from './CardButton';

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
  return (
    <div className='card' id={props.props.id}>
        <img src={props.props.snippet.thumbnails.default.url} className='card__image' alt="fruit"></img>
        <div className='card__contain'>
          <span className='card__text_title'><b>Video Title: </b>{props.props.snippet.title}</span>
          <span className='card__text_species'><b>Channel Title: </b>{props.props.snippet.channelTitle}</span>
        </div>
        <CardButton
          modal={props.modal} 
          setModal={props.setModal} 
          text={'more info...'} 
          cardId={props.props.id} 
          setCardId={props.setCardId}>
        </CardButton>
    </div>
  );
};

export default CardItem;
  