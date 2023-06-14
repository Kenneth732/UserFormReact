import React from "react";
import UserCard from "./UserCard";

function UserList({ 
    onRemoveUser, userDatas
 }){
    return(
        <div>
            {userDatas.map((user) => {
                return <UserCard key={user.id} users={user} />
            })}
        </div>
    )
}
export default UserList;