import MoreInfoCard from './MoreInfoCard';

const Modal = ({visible, setVisible, cardId, cardInfo}: any) => {  

    const classes = ['modal'];

    if(visible) {
      classes.push('active');
    }
    return (
      <div className={classes.join(' ')} onClick={() => setVisible(false)}>
        <div className="modal__content" onClick={(e) => {e.stopPropagation()}}>
        <MoreInfoCard cardId={cardId} setModal={setVisible} cardInfo={cardInfo}></MoreInfoCard>
        </div>
      </div>
    );
  };
    
  export default Modal;
  