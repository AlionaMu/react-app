import Form from '../components/Form';
import FormCardList from '../components/FormCardList';
import { useGlobalContext } from '../context';

function Forms() {
  const { formsList } = useGlobalContext();

  return (
    <main className='main'>
      <h1>FORMS</h1>
      <Form />
      <FormCardList list={formsList} />
    </main>
  )
}

export default Forms;
