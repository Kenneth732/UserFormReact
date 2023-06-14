import React from "react";
import UserCard from "./UserCard";

function UserList({ 
    onRemoveUser, userDatas
 }){
    return(
        <div>
            <h2>user list</h2>
            {userDatas.map((user) => {
                return <UserCard key={user.id} users={user} onRemoveUser={onRemoveUser} />
            })}
        </div>
    )
}
export default UserList;