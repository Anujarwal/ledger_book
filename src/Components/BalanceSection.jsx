import React from "react";
import { useDispatch, useSelector } from "react-redux";

const BalanceSection = () => {
  const { allTransactions } = useSelector((state) => state.transactions);



  const balance = allTransactions.reduce((p,c) => {
      return p + c.amount;
    }, 0);

  const expences = allTransactions.filter((allTransaction) => allTransaction.amount < 0 ).reduce((p, c) => {
    return p + c.amount;
  }, 0); 

  const income = allTransactions.filter((item) => item.amount > 0 ).reduce((p, c) => {
    return p + c.amount;
  }, 0); 

  return (
    <div className="my-3 row-3 d-flex my-4 flex-wrap ">
      <div className="col-md-8 col-lg-4 ">
        <div className="card rounded-0 p-3">
          <h1 className="displahy-6">Income</h1>
          <h1 className="displahy-6">{income}</h1>
        </div>
      </div>
      <div className="col-md-12 col-lg-4">
        <div className="card rounded-0 p-3">
          <h1 className="displahy-6">Expences</h1>
          <h1 className="displahy-6">{expences}</h1>
        </div>
      </div>
      <div className="col-md-12 col-lg-4">
        <div className="card rounded-0 p-3">
          <h1 className="displahy-6">Balance</h1>
          <h1 className="displahy-6">{balance}</h1>
        </div>
      </div>
    </div>
  );
};

export default BalanceSection;
