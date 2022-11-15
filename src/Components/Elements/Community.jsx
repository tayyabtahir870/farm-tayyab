import React from "react";
import {AiOutlineMedium} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {RiDiscordFill} from 'react-icons/ri'
import {BsFacebook} from 'react-icons/bs'

function Community() {
  return (
    <div className="community">
      <div class="container ">
        <div class="row">
          <div class="col">
            <h1 className="h1-text mt-5">YOUR STEPS COUNT  <br />  WITH Marathon!</h1>
            <img className="img-fluid mb-3" src="https://farms.marathoncash.com/assets/mobileapp.svg" alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img className="img-fluid mb-3" src="https://farms.marathoncash.com/assets/mobileapp1.svg" alt="" />
          </div>
          <div class="col text-end">
            <h1 className="community-text mt-5 ">Join Our Comunity</h1>
            <AiOutlineMedium size={28}    color='#858C94' /> &nbsp;&nbsp;
            <AiOutlineTwitter size={28} color='#858C94'/> &nbsp;&nbsp;
            <BsTelegram size={23} color='#858C94'/> &nbsp;&nbsp;
            <SiDiscord size={26} color='#858C94'/> &nbsp;&nbsp;
            <AiOutlineInstagram size={26} color='#858C94'/> &nbsp;&nbsp; 
            <AiFillGithub size={26} color='#858C94'/> &nbsp;&nbsp;
            <RiDiscordFill size={25} color='#858C94'/> &nbsp;&nbsp;
            <BsFacebook size={22} color='#858C94'/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
