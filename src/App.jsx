import "../src/App.css"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
// components
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import UserList from "./components/userList/UserList"
import NewUserForm from "./components/newuser/NewUserForm"

function App() {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const closeModal = (e) => {
     if(e.target.className === "overlay") setShowModal(false)
     if(e.key === "Escape") setShowModal(false)
  }
  const deleteUser = (id) => {
   setUsers((prev) => {
    return prev.filter((user) => {
      return user.id !== id
    })
   })
  }

  const addUsers = (user) => {
      setUsers((prev) => {
          return [...prev, user]
      })
      setShowModal(false)
  }
  return (
     <div onKeyDown={closeModal} onClick={closeModal} className='App'>
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser}  />
      </main>
      {showModal && <NewUserForm addUsers={addUsers} />}
      <button onClick={() => setShowModal(true)} className="create-user">Create User</button>
      <Footer />
     </div>
  )
}

export default App
