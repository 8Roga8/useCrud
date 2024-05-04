import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUsers from './components/FormUsers'
import UserdCard from './components/UserdCard'


function App() {

  const [userEdit, setUserEdit] = useState()
  const [formClose, setFormClose] = useState(true)

  const BASEURL = 'https://usercrud-back.onrender.com'

  const [users, getUsers, createUsers, deleteUsers, updateUsers] = useCrud(BASEURL)

  useEffect(() => {
    getUsers('/users/')
  }, [])

  const handleOpenForm = () => {
    setFormClose(false)
  }

  return (
    <div className='app'>
      <header className='app_header'>
        <h1 className='app_title'>Users</h1>
        <button onClick={handleOpenForm } className='form_btn_create'>Create new user</button>
      </header>
      <FormUsers
        createUsers={createUsers}
        userEdit={userEdit}
        updateUsers={updateUsers}
        setUserEdit={setUserEdit}
        formClose={formClose}
        setFormClose={setFormClose}
        />
        <div className='app_user_container'>
          {
            users?.map(user =>(
              <UserdCard
                key={user.id}
                user={user}
                deleteUsers={deleteUsers}
                setUserEdit={setUserEdit}
                handleOpenForm={handleOpenForm }
                setFormClose={setFormClose}
              />
            ))
          }
        </div>
    </div>
  )
}

export default App
