import { useForm } from 'react-hook-form';

function CharacterLoadForm(props) {
  
  let inputData = '';

  const { register, handleSubmit } = useForm();

  return (
    <form className='LoadForm' onSubmit={handleSubmit ((data) => {props.setDataMessage(data.characterData)})}>
      <textarea {...register('characterData')} placeholder='Paste your data' className='LoadInput' />
      <br />
      <input className='LoadSubmit' type='submit' value='Go' />
    </form>
  )
}

export default CharacterLoadForm;
