import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

function UserPage(){
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/userData')
        .then((res) => res.json())
        .then((userArrays) => {
            setUserData(userArrays)
        })
    }, []);

    const handleAddUser = (newUser) => {
        fetch('http://localhost:3000/userData', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },body:JSON.stringify(newUser)
        }).then((res) => res.json())
        .then((addedUser) => {
            setUserData((prevUser) => [...prevUser, addedUser])
        })
    }

    const handleDeleteUser = (id) => {
        fetch(`http://localhost:3000/userData/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            setAnimalData((prevData) =>
              prevData.filter((animal) => animal.id !== id)
            );
          })
          .catch((error) => {
            console.log("Error deleting animal:", error);
          });
      };
    return(
        <div>
            <UserForm onAddUser={handleAddUser} />
            <UserList onRemoveUser={handleDeleteUser} userDatas={userData} />
        </div>
    )
}
export default UserPage;