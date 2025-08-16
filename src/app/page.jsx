import React from "react";
import Header from "@/components/Header";
import Container from "@/components/Container";

export const metadata = {
  title: 'Fundamentos Next'
}

const App = () => {

  const pageTitle = "Fundamentos NextJS"

  return (
    <>
      <Header title={pageTitle}></Header>
      <Container>

      </Container>
    </>
  )

}

export default App;