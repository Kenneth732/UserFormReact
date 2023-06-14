import React, { useEffect, useState } from "react";

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
        fetch(`http://localhost:3000/animalData/${id}`, {
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
        <div></div>
    )
}
export default UserPage;