import React from "react";

const UserNameId = ({ params: { id, name } }) => {

    return (
        <>
            <h2>User:</h2>
            <h3>[name]: { name }</h3>
            <h3>[id]: { id }</h3>
        </>
    )

}

export default UserNameId;