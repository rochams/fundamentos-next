import React from "react";
import Link from "next/link";

const Panel = ({ params }) => {

    const main = "/"

    return (
        <>
            <div className="flex-between">
                <h3>PANEL</h3>
                <Link className="link" href={main}>Página inicial</Link>
            </div>
        </>
    )

}

export default Panel;