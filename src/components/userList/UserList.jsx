import React, {useState} from 'react'
import "./UserList.css"

const UserList = ({ users, deleteUser }) => {
    return (
        <div className='userList'>
            <div className='userList-container container'>
                {users.map((user) => {
                    return (
                        <div className='card' key={user.id}>
                            <div className="card-inner">
                                <img src={user.imagePerson} alt={user.name} height={150} width={150} />
                                <h3>{user.firstName},{user.lastName},{user.age}</h3>
                                <p>From: {user.from}</p>
                                <p>Job: {user.job}</p>
                                <p>Gender: {user.gender}</p>
                                <button onClick={() => {deleteUser(user.id)}}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserList