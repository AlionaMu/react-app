import { useContext } from 'react';
import Form from '../components/Form';
import FormCardList from '../components/FormCardList';
import { AppContext } from '../context';

function Forms() {
  const { state } = useContext(AppContext);

  return (
    <main className='main'>
      <h1>FORMS</h1>
      <Form />
      <FormCardList list={state} />
    </main>
  )
}

export default Forms;
