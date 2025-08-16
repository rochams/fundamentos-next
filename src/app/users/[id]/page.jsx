import React, { use } from "react";

const User = ({ params: { id } }) => {

    return (
        <>
            <h3
                style={{textAlign: 'center', fontWeight: 'bold'}}
            >
                User - { id }
            </h3>
        </>
    )

}

export default User;