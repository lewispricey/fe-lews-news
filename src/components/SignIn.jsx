import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/User';
import GetUsers from '../api/getUsers'
import UserDropdownItem from './UserDropdownItem';
import getUserByID from '../api/getUserById'
import '../styles/signin.css'

const SignIn = () => {
    const {user, setUser} = useContext(UserContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
        GetUsers().then(({users}) => setUsers(users))
    }, [])

    const handleChange = ({target}) => {
        getUserByID(target.value).then(({user}) => {
            setUser(user)
        })
    }

    return (
        <div className="outer">

            <div className="card">
                <div className="card-inner">
                    <img className="signin__avatar" src={user.avatar_url} alt="" srcset=""></img>
                    <h2 className="signin__name">{user.name}</h2>
                    <hr className="signin__divide"></hr>
                    <label htmlFor="username__selector">Select User:</label>
                        <select onChange={handleChange} name="user" id="user-selector " className="selector">
                            <option value=""></option>
                            {users.map((user) => <UserDropdownItem user={user}/>)}
                            
                        </select>
                </div>
            </div>
        </div>
    );
};

export default SignIn;