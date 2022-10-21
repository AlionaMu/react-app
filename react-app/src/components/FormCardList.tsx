import FormCard from './FormCard';

const FormCardList = (props: any) => {
    return (
              <div>
                { props.memoList ?
                  <div className="form-cards__container">
                    { props.memoList.map((item: any, i: number) => {
                    return <FormCard props={item} key={i + 1} src={item.src} />
                    })}
                  </div> :
                  <span> List is empty </span>
                }
              </div>
          );
  };
  
  export default FormCardList;
