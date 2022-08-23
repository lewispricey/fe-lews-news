import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/User';
import GetUsers from '../api/getUsers'
import UserDropdownItem from './UserDropdownItem';
import getUserByID from '../api/getUserById'

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
        <div class="outer">

            <div class="card">
                <div class="card-inner">
                    <img class="signin__avatar" src={user.avatar_url} alt="" srcset=""></img>
                    <h2 class="signin__name">{user.name}</h2>
                    <hr class="signin__divide"></hr>
                    <label HTMLfor="username__selector">Select User:</label>
                        <select onChange={handleChange} name="user" id="user-selector " class="selector">
                            <option value=""></option>
                            {users.map((user) => <UserDropdownItem user={user}/>)}
                            
                        </select>
                </div>
            </div>
        </div>
    );
};

export default SignIn;