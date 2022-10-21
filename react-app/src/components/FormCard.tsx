const FormCard = (props: any) => {
    return (
      <div className='card' id="1" key={props}>
       
          <div className='card__contain'>
            <div className='card__text'>
              <span className='card__text_title'>{props.props.input}</span>
              <span className='card__text_title'>{props.props.date}</span>
              <span className='card__text_title'>{props.props.select}</span>
              <span className='card__text_title'>{props.props.checkbox}</span>
              <span className='card__text_title'>{props.props.gender}</span>
              <img src={props.props.img} className='form-card__image' alt="avatar"></img>
   
            </div>
          </div>
      </div>
    );
  };
  
  export default FormCard;
  