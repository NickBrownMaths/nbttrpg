import { useForm } from 'react-hook-form';

function CharacterNameForm(props) {
  
  let inputData = '';

  const { register, handleSubmit } = useForm();

  return (
    <form className='NameForm' onSubmit={handleSubmit ((data) => {props.setName(data.name)})}>
      <input {...register('name')} placeholder='Enter your name' className='NameInput' />
      <input className='NameSubmit' type='submit' value='Go' />
    </form>
  )
}

export default CharacterNameForm;
