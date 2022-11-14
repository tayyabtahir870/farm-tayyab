import React from "react";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text">FARM</h1>
      <p className="para-text text-center">
        Stake your tokens to earn more $MRACE.
      </p>

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
                      <h3 className="cardtext mt-4">Your MRACE Balance</h3>
                      <h3 className="cardfontcolor">0.00</h3>
                    </div>
                  </div>
                </div>
                <hr />
              </div>

              <div className="pending">
                <div className="px-5 pendingcolor mb-5">
                  <h5 className="fw-bold">Pending Harvest</h5>
                  <h5 className="fw-bold">
                    Daily Output of <span className="spanfontcolor">MRACE</span>
                  </h5>
                </div>
                <div className="px-5 pendingcolor">
                  <h5 className="fw-bold">
                    <span className="spanfontcolor">0.00</span> MRACE
                  </h5>
                  <h5 className="fw-bold">
                    <span className="spanfontcolor">0.00</span> MRACE
                  </h5>
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
                        src="https://farms.marathoncash.com/assets/coin/GMT94.png"
                        alt=""
                        width={140}
                      />
                    </div>
                    <div class="col">
                      <h3 className="cardfontcolor mt-4">
                        APY: <br />
                        500%
                      </h3>
                    </div>
                    <div class="col">
                      <img
                        src="https://farms.marathoncash.com/assets/logo-cr.png"
                        alt=""
                        width={140}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div class="container text-center">
                  <div class="row pendingcolor ">
                    <div class="col"><h5 className="fw-bold">Earn</h5></div>
                    <div class="col"><h5 className="spanfontcolor fw-bold">GMT</h5></div>
                    <div class="col"><h5 className="fw-bold">DEPOIST</h5></div>
                    <div class="col"><h5 className="spanfontcolor fw-bold">MRACE</h5></div>

                  </div>
                </div>
                <div className="col text-center">
                <button className="hero-button mt-4">
                        <b>Seclet</b>
                      </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
