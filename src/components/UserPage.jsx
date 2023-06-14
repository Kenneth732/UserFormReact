import React, { useEffect, useState } from "react";

function UserPage(){
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch('')
        .then((res) => res.json())
        .then((userArrays) => {
            setUserData(userArrays)
        })
    }, []);

    const handleAddUser = (newUser) => {
        fetch('', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },body:JSON.stringify(newUser)
        }).then((res) => res.json())
        .then((addedUser) => {
            setUserData((prevUser) => [...prevUser, addedUser])
        })
    }
    return(
        <div></div>
    )
}
export default UserPage;