import React from "react";
import { ReactDOM } from "react";
import Most_wanted from "../components/most_wanted";
import Navbar from '../components/navbar';
import Footer from "../components/footer";

import Featured from "./featured";

import "../styles/home.css";
import { Outlet, Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="container-fluid">
                <Navbar/>
            <div className="intro row">
                <div className="col-6  men">
                    <Link to={"/men"}> 
                        <img className="img-fluid" src="https://static.wixstatic.com/media/ebd955_59f6850fd65c448ea93b1db254ee4bb2~mv2_d_3744_5615_s_4_2.png/v1/crop/x_0,y_132,w_3744,h_5351/fill/w_411,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebd955_59f6850fd65c448ea93b1db254ee4bb2~mv2_d_3744_5615_s_4_2.png"/>
                        <p>Shop Men</p>
                    </Link>
                </div>

                <div className="col-6 female">
                   <Link to={"/women"}>
                        <img className="img-fluid" src="https://static.wixstatic.com/media/ebd955_7e944e84dee44943983e589c702efb5b~mv2_d_3425_5446_s_4_2.png/v1/crop/x_72,y_80,w_3258,h_4897/fill/w_411,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebd955_7e944e84dee44943983e589c702efb5b~mv2_d_3425_5446_s_4_2.png"/>
                        <p>Shop Women</p>
                    </Link>
                </div>

            </div>
            
            <div className="row">
            <Most_wanted/>    
            </div>
            

            <div className="row">
                <div class="parallax col-sm-6">
                    <div className="bg-warning p-5">
                        <h1 className="" >Shop 'til you drop, then shop some more!</h1>
                    </div>
                </div>

                <div class="parallax1 col-sm-6">
                <div className="bg-light p-5">
                        <h1>Retail therapy: where every purchase is a victory</h1>
                    </div>
                </div>
            </div>


            <h1 className="featured_header">Featured</h1>
            <div className="row featured">
            <Featured/>    
            </div>

        </div>

    )
}