import './styles/UserdCard.css'

const UserdCard = ({user, deleteUsers, setUserEdit, setFormClose }) => {

    const handleDelete = () =>{
        deleteUsers('/users/', user.id)
    }

    const handleEdit = () =>{
        setUserEdit(user)
        setFormClose()
    }


  return (
    <article className="card">
        <h2 className="card_name">{`${user.first_name} ${user.last_name}`}</h2>
        <hr className='card_hr' />
        <ul className="card_ul">    
            <li className="card_list"><span className="card_span">EMAIL</span> 
                <span className="card_Value">{user.email}</span>
            </li>
            <li className="card_list"><span className="card_span">BIRTHDAY</span> 
                <span className="card_value">{user.birthday}</span>
            </li>
        </ul>
        <hr className='card_hr'  />
        <div className='card_btn'>
            <button className="card_delete" onClick={handleDelete}>Delete</button>
            <button className="card_edit"  onClick={handleEdit}>Edit</button>
        </div>
    </article>
  )
}

export default UserdCard