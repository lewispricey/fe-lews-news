import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/User';
import GetUsers from '../api/getUsers'
import UserDropdownItem from './UserDropdownItem';
import getUserByID from '../api/getUserById'
import '../styles/signin.css'
import Loading from './Loading';

const SignIn = () => {
    const {user, setUser} = useContext(UserContext)
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState([])

    useEffect(() => {
        setIsLoading(true)
        GetUsers()
        .then(({users}) => {
            setIsLoading(false)
            setUsers(users)
        })
    }, [])

    const handleChange = ({target}) => {
        setIsLoading(true)
        getUserByID(target.value)
        .then(({user}) => {
            setIsLoading(false)
            setUser(user)
        })
    }

    return (
        <div className="outer">

            <div className="card">
                <div className="card-inner">
                    { isLoading ? <Loading layoutClass=""/> : <img className="signin__avatar" src={user.avatar_url || 'https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg'} alt={user.name}></img>}
                    <h2 className="signin__name">{user.name}</h2>
                    <hr className="signin__divide"></hr>
                    <label htmlFor="username__selector">Select User:</label>
                        <select onChange={handleChange} name="user" id="user-selector " className="selector">
                            <option value="" disabled={true} ></option>
                            {users.map((user) => <UserDropdownItem key={user.username} user={user}/>)}
                            
                        </select>
                </div>
            </div>
        </div>
    );
};

export default SignIn;