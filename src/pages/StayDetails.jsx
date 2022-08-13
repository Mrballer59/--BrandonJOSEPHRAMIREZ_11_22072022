import React from "react";
import "../style/StayDetails.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Tag from "../components/Tags/Tag";
import DropDown from "../components/DropdownList/DropdownList";
import leftArrow from "../assets/leftArr.png";
import rightArrow from "../assets/rightArr.png";
import Slider from "../components/Slider/Slider";

const StayDetails = () => {
  const [product, setProduct] = useState(null);
  const { stayDetailsId } = useParams();
  // need to fetch the data then need to check if it's correctly grabbed then you need to store it and compared to the id
  useEffect(() => {
    axios
      .get("../DataLogement.json")
      .then((res) => {
        console.log("Getting from deatail page....", res.data);
        const listing = res.data.find(
          (listing) => listing.id === stayDetailsId
        );
        console.log(listing);
        setProduct(listing);
      })
      .catch((err) => console.log);
  }, []);

  const [current, setCurrent] = useState(0);
  const length = product && product.pictures.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function previousSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  // add the function for the stars with icon font awesome
  function showRating() {
    const starRating = [
      null,
      "oneStar",
      "twoStars",
      "threeStars",
      "fourStars",
      "fiveStars",
    ];
    console.log(starRating);
    return "stars " + starRating[parseInt(product && product.rating)];
  }

  return (
    <section className="listingSection">
      <div className="slider">
        <img
          src={leftArrow}
          alt="back"
          className="arrowLeft"
          onClick={previousSlide}
        />
        <img
          src={rightArrow}
          alt="next"
          className="arrowRight"
          onClick={nextSlide}
        />
        {product &&
          product.pictures.map((picture, index) => {
            if (index === current) {
              return <img src={picture} className="photo" />;
            }
          })}
      </div>
      <div className="accomodationDetails">
        <div>
          <h4>{product && product.title}</h4>
          <h6>{product && product.location}</h6>
          <div className="tagsSection">
            {product && product.tags.map((tag) => <Tag tagName={tag} />)}
          </div>
        </div>
        <div className="hostPart">
          <div className="hostListing">
            <h5>{product && product.host.name}</h5>
            <img
              src={product && product.host.picture}
              alt={product && product.host.name}
            />
          </div>
          <aside className={showRating()}></aside>
        </div>
      </div>
      <div className="listingDropDown">
        <DropDown title="Description" text={product && product.description} />
        <DropDown
          title="Équipements"
          text={
            product &&
            product.equipments.map((equipment) => (
              <ul>
                <li>{equipment}</li>
              </ul>
            ))
          }
        />
      </div>
    </section>
  );
};

export default StayDetails;
