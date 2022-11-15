import React from "react";
import { useNavigate } from "react-router-dom";
import cardinfo from '../Utils/Carddata.json'
function Card() {
  const navigate=useNavigate();
  return (
    <div className="card1">
      <div>
        <h1 className="card-text1 mt-5">Choose Your Stake Pool</h1>
      </div>
      <div class="container text-center">
        <div class="row">
         {
            cardinfo.map(item=>(
                <div class="col-md-3">
                <div class="card mb-3">
                  <div class="card-body">
                    <img
                      src={item.img}
                      alt=""
                      width={140}
                    />
                    <h3 className="card-text2 my-3">{item.rate}</h3>
                    <div className="deposit px-4 text-start">
                      <div className="pendingcolor ">
                        <h5 className="fw-bold">Deposit</h5>
                        <h5 className="fw-bold">Earn</h5>
                      </div>
                      <div className="text-end spanfontcolor">
                        <h5 className="fw-bold">{item.deposit}</h5>
                        <h5 className="fw-bold">MRACE</h5>
                      </div>
                    </div>
                    <hr />
                    <button className="deposit-button mt-4" onClick={()=>navigate("/carddeposit", {state:item})}>
                      <b>Seclet</b>
                    </button>
                  </div>
                </div>
              </div>
            ))
         }
         
        </div>
      </div>
    </div>
  );
}

export default Card;
