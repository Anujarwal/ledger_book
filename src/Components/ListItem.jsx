import React from "react";
import { useDispatch } from "react-redux";
import { edit, remove } from "../Feature/todo/transactionsSlice";

const ListItem = ({transaction}) => {


    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(remove(id))
    }

    const handleEdit = (transaction) => {
      dispatch(edit(transaction))
      // console.log(transaction)
    }

  return (
    <li className="list-group-item">
      <h1 className="display-3">{transaction.text}</h1>
      <h1 className="display-3">{transaction.amount}</h1>
      <span className="float-end btn-sm">
        <button className="btn btn-outline-warning rounded-0 mx-2" onClick={() => handleEdit(transaction)}>Edit</button>
        <button className="btn btn-outline-danger rounded-0 mx-2" onClick={() => handleDelete(transaction.id)}>
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
