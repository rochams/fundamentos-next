'use client';
import React, { useState } from "react";
import Link from "next/link";
import styles from '../styles/Container.module.css';

const Container = ({ content }) => {

    const [contentTitle, setContentTitle] = useState("")

    return (
        <div className={styles.container}>
            <div>
                <h3>Texto 'inputado': { contentTitle }</h3>
                <input type="text" onChange={(e) => setContentTitle(e.target.value)} />
            </div>
            <div>
                <Link className="link" href={contentTitle}>Ir para Página persinalizada</Link>
                <Link className="link" href={"/about"}>Sobre nós</Link>
            </div>
        </div>
    )

}

export default Container;