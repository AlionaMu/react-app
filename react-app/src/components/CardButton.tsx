const CardButton = (props: any) => {

  const openModal = () => {
    props.setModal(true);
    props.setCardId(props.cardId);
  }

  return (
    <>
      <button className='card__button button' onClick={openModal} >{props.text}</button>
    </>
  );
};
    
export default CardButton;