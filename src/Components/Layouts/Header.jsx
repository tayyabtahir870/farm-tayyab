import React from 'react'
import {BiWallet} from 'react-icons/bi'

function Header() {
  return (
    <div>
      <div className="header  ">
        <nav class="navbar navbar-expand-lg   ">
          <div class="container ">
            <a class="navbar-brand" href="/">
              <img
                src="https://farms.marathoncash.com/assets/logo-cr.png"
                alt=""
                width={100}

                
                
              />
              <a className=" navbarcolor" target="_blank" href="https://marathoncash.com/" rel="noreferrer"><img src="/assets/logo-cr.png" width="100" class="m-auto " alt=""/> MarathonCash.Com</a>
            </a>
            

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="hhhhh">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item"></li> 
                  <li class="nav-item">
                   
                    <a class="nav-link" to="/contact">
                      <button className="header-button1">
                        < BiWallet size={25}/> &nbsp;
                        <b>Connect Wallet</b>
                      </button>
                    </a>
                
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header