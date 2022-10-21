const MoreInfoCard = (props: any) => {
  
  const clickHandler = () => {
    props.setModal(false);
  }

  return (
    <>
      { props.cardInfo ?
        <>
          <div className='more-info-card' id={props.cardId} key={props.cardId}>
            <img src={props.cardInfo.snippet.thumbnails.medium.url} className='more-info-card__image' alt="fruit"></img>
            <div className='card__contain'>
              <span className='card__text_title'><b>Video Title: </b>{props.cardInfo.snippet.title}</span>
              <span className='card__text_species'><b>Channel Title: </b>{props.cardInfo.snippet.channelTitle}</span>
              <span className='card__text_species'><b>Video Description: </b>{props.cardInfo.snippet.description}</span>
            </div>
            <div className='more-info-card__button' onClick={clickHandler}>X</div>
          </div>
        </> :
        <>
          <div className='more-info-card' id={props.cardId} key={props.cardId}>
            <div className='more-info-card__button' onClick={clickHandler}>X</div>
          </div>
        </>
      }
    </>
  );
};
  
export default MoreInfoCard;
