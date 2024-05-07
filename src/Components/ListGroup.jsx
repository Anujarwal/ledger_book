import React from 'react'
import ListItem from './ListItem'
import { useSelector } from 'react-redux'

const ListGroup = () => {

    const {allTransactions} = useSelector((state) => state.transactions)

  return (
    <ul className="list-group">
     {
        allTransactions.map((transaction) =>  <ListItem key={transaction.id} transaction={transaction} />)
     }
    </ul>
  )
}

export default ListGroup