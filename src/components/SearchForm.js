import { useForm } from 'react-hook-form';

function SearchForm(props) {

  const { register, handleSubmit } = useForm();

  if (props.appear) {
    return (
      <form className='NameForm' onChange={handleSubmit((data) => { props.setSearchTerm(data.search) })}>
        <input {...register('search')} placeholder='Search' className='NameInput' />
      </form>
    )
  }
}

export default SearchForm;
