import React from "react";
import Link from "next/link";

const About = ({ params }) => {

    return (
        <>
            <div className="flex-between">
                <section id="about">
                    <h2 className="purple">Sobre Nós</h2>
                    <p>
                        Somos movidos pela paixão em criar soluções que fazem a diferença. Desde o início, nosso compromisso tem sido oferecer qualidade, inovação e um atendimento próximo e transparente. Acreditamos que cada detalhe importa e que o sucesso está na combinação entre propósito, criatividade e dedicação.
                    </p>
                    <p>
                        Com uma equipe multidisciplinar e experiente, trabalhamos todos os dias para entregar resultados que superem expectativas, sempre com foco nas necessidades dos nossos clientes e parceiros.
                    </p>
                    <p>
                        Seja qual for o desafio, estamos prontos para caminhar ao seu lado e construir juntos algo de valor.
                    </p>
                </section>
                <Link className="link" href={"/"}>Início</Link>

            </div>
        </>
    )

}

export default About;