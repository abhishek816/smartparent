import React from 'react'
import parenting1 from '../Assets/parenting1.jpeg'
import { Carousel } from 'bootstrap'
import parenting3 from '../Assets/parenting3.jpg'



function Carousel1() {
  return (
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img  src={parenting3} class="d-block w-100" alt="..."/>
        
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src={parenting1} class="d-block w-100" alt="..."/>
        
      </div>
      <div class="carousel-item">
        <img  src={parenting1} class="d-block w-100" alt="..."/>
        
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel1