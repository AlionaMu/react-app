import { useMemo, useState } from 'react';
import { Form, FormInfo } from '../components/Form';
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

  const creatFormCard = (event: Event, newCard: FormInfo) => {
    event.preventDefault();
    setList([...list, newCard]);
  }

  return (
    <div>
      <h1>FORMS</h1>
      <Form create={creatFormCard} />
      <FormCardList {...formProps} />
    </div>
  )
}

export default Forms;
