import FormCard from './FormCard';

const FormCardList = (props: any) => {
  return (
    <>
      { props.memoList ?
        <div className="form-cards__container">
          { props.memoList.map((item: any, i: number) => {
              return <FormCard props={item} key={i+1} id={i+1}/>
            })}
        </div> :
        <span> List is empty </span>
      }
    </>
  );
};
  
  export default FormCardList;
