import React from 'react'
import { useLocation } from 'react-router-dom'

function Deposit() {
    const {state}=useLocation();
  return (
    <div className='deposit'>
        <div className='text-center'>
            <img src={state.img} alt="" width={100} />
            <h3 className='gmt-text'>{state.deposit}</h3>
            <p className='earn-color'>Deposit {state.deposit} Tokens and Earn MRACE</p>

        </div>
        <div class="container text-center">
        <div class="row">
          <div class="col">
            <div className="card">
              <div className="card-body">
                <div class="container text-center">
                  <div class="row">
                    <div class="col">
                      <img
                        src="https://farms.marathoncash.com/assets/logo-cr.png"
                        alt=""
                        width={140}
                      />
                    </div>
                    <div class="col">
                      <h3 className="cardtext mt-5"> MRACE</h3>
                    
                    </div>
                  </div>
                </div>
                <hr />
              </div>

              <div className="deposit-card">
                <div className="px-5 pendingcolor mb-3 earn-color">
                  <h5 className="fw-bold">Earned</h5>
                  <h5 className="fw-bold">
                   0.00
                  </h5>
                </div>
                <div className="px-5 ">
                <button className="deposit-button mt-2">
                        <b>Harvest</b>
                      </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="container text-center">
                  <div class="row">
                    <div class="col">
                      <img
                        src={state.img}
                        alt=""
                        width={140}
                      />
                    </div>
                    <div class="col">
                      <h3 className="cardfontcolor mt-5">
                       {state.deposit}
                      </h3>
                    </div>
                 
                  </div>
                </div>
                <hr />
               
                 <div className="deposit-card">
                <div className="px-5 pendingcolor mb-3 earn-color">
                  <h5 className="fw-bold">Staked</h5>
                  <h5 className="fw-bold">
                   0.00
                  </h5>
                </div>
                <div className="px-5 ">
                <button className="deposit-button mt-2">
                        <b>Approve</b>
                      </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deposit