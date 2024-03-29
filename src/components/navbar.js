import React, { useEffect, useState } from 'react';
import { ReactDOM } from "react";
import "../styles/navbar.css";
import { Outlet, Link } from "react-router-dom";
import logo from "../images/logo.jpg"
import data from "../data/all_products"


// <Link to={"/men"}></Link>
// <Link to={"/women"}><a class="dropdown-item" href="#">Women</a></Link>

export default function Navbar(){
  const [filter, setFilter] = useState([]);


  const searchFunction = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    if (searchTerm) {
      const filteredData = data.filter(item =>
        item.name.toUpperCase().includes(searchTerm)
      );
  
      // Log or use the filteredData array as needed
      console.log(event.target.value);
      setFilter(filteredData);
      console.log(`This is the ${filter.name}`)
    } else {
      console.log(`Search term must be at least 2 characters.`);
      setFilter([])
    }
  };
    return(
      <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/"><img src={logo}/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
       <Link to={"/"}> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
      </li>
      <li class="nav-item">
        <Link to={"/shop all"}><a class="nav-link" href="#">Shop All</a></Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Gender
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to={"/men"}><a class="dropdown-item" href="#">Men</a></Link>
        <Link to={"/women"}><a class="dropdown-item" href="#">Women</a></Link>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  onChange={searchFunction}/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
 </nav>
  <ul className='search-results'>
  {
  filter.map((item, index, key) => 
  <Link to={`/dets/${item.name}`}  key={index}>
  <li>{item.name}</li>
  </Link>
  )
}
  </ul>

      </div>
    )
} 