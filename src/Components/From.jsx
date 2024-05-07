import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../Feature/todo/transactionsSlice";

const From = () => {
  // const {edit} = useSelector((state) => state.transactions)
  const {edit} = useSelector((state) => state.transactions)

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.editMode){
      dispatch(update({
        id : edit.transaction.id,
        text : text,
        amount 
      }))
    }else{
      dispatch(
        add({
          id: crypto.randomUUID(),
          text: text,
          amount: parseInt(amount),
        })
      );
    }
    setText("");
    setAmount("");
  };

  // useEffect(() => {
  //   setText(edit.transaction.text);
  //   setAmount(edit.transaction.amount)
  // } , [edit])

  useEffect(() => {
    setAmount(edit.transaction.amount),
    setText(edit.transaction.text)
  } , [edit])

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Your Expense"
        className="form-control rounded-0 my-3"
        value={text}
        required
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Your Amount"
        className="form-control rounded-0"
        value={amount}
        required
        onChange={(e) => setAmount(e.target.value)}
      />

      <button className="btn btn-primary rounded-0 w-100 my-2">Save</button>
    </form>
  );
};

export default From;
