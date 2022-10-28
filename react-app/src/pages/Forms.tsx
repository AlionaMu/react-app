import { useMemo, useState, useEffect } from 'react';
import Form, { FormInfo } from '../components/Form';
import FormCardList from '../components/FormCardList';

function Forms() {
  const arr: FormInfo[] = [];
  const [list, setList] = useState(arr);

    const memoList: FormInfo[] = useMemo(() => {
    return list;
  }, [list, setList]);

  const formProps = { 
    memoList: memoList,
    setList: setList
  } 

  useEffect(() => {
    list;
  }, [list, setList])

  const creatFormCard = (newCard: FormInfo) => {
    list.length ? setList([...list, newCard]) : setList([newCard])
  }

  return (
    <main className='main'>
      <h1>FORMS</h1>
      <Form create={creatFormCard} />
      <FormCardList {...formProps} />
    </main>
  )
}

export default Forms;
