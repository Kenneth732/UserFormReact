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

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/userData/${id}`, {
            method: 'DELETE',
        }).then((res) => res.json())
        .then(() => {
            setUserData((prevUser) => prevUser.filter((user) => user.id !==id))
        })
    }
    return(
        <div></div>
    )
}
export default UserPage;