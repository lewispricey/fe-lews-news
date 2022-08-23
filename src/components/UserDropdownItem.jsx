import React from 'react';

const UserDropdownItem = ({user}) => {
    return (
        <option value={user.username}>{user.username}</option>
    );
};

export default UserDropdownItem;