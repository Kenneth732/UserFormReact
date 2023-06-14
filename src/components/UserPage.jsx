import React, { useEffect, useState } from "react";

function UserPage(){
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch('')
        .then((res) => res.json())
        .then((userArrays) => {
            
        })
    })
    return(
        <div></div>
    )
}
export default UserPage;