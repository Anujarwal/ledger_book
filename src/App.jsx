import React from 'react'
import Navbar from './Components/Navbar'
import From from './Components/From'
import BalanceSection from './Components/BalanceSection'
import ListGroup from './Components/ListGroup'

const App = () => {
  return (
    <>
   <Navbar />
    <div className=".container-fluid p-5">
    <From />
    <BalanceSection />
    <ListGroup />
    </div>

    </>
  )
}

export default App