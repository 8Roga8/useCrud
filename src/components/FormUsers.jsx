import { useForm } from "react-hook-form"
import { useEffect } from "react"
import './styles/FormUser.css'

const FormUsers = ({ createUsers, userEdit, updateUsers, setUserEdit, formClose, setFormClose }) => {

  const {handleSubmit, register, reset} = useForm()

  useEffect(() => {
    reset(userEdit)
  }, [userEdit])
  
  const sumbmit = data => {
    if (userEdit) {
      updateUsers('/users/', userEdit.id, data)
      setUserEdit()
    }
    else {
      createUsers('/users/', data)
    }
    setFormClose(true)
    reset({
      email: '',
      password: '',
      first_name:'',
      last_name:'',
      birthday: ''
    }
    )
  }

  const handleFormClose = () => {
    setFormClose(true)
    reset({
      email: '',
      password: '',
      first_name:'',
      last_name:'',
      birthday: ''
    }
    )   
    setUserEdit() 
  }

  return (
    <div className={`form_container ${formClose && 'form_close'}`}>
      <form className="form" onSubmit={handleSubmit(sumbmit)}>
        <header className="form_header">
          <h2 className="form_title">User Form</h2>
          <span onClick={handleFormClose} className="form_x">X</span>
        </header>
        <label className="form_label">
          <span className="form_span_label">Email </span>
          <input className="form_value" {...register('email')} type="email" />
        </label>
        <label className="form_label">
          <span className="form_span_label">Password </span>
          <input className="form_value" {...register('password')}  type="password" />
        </label>
        <label className="form_label">
          <span className="form_span_label">First Name </span>
          <input className="form_value" {...register('first_name')}  type="text" />
        </label>
        <label className="form_label">
          <span className="form_span_label">Last name </span>
          <input className="form_value" {...register('last_name')}  type="text" />
        </label>
        <label className="form_label">
          <span className="form_span_label">birthday </span>
          <input className="form_value" {...register('birthday')}  type="date" />
        </label>
        <button className="form_btn">Submit</button>
      </form>
    </div>
  )
}

export default FormUsers