import React from "react";
import "../style/StayDetails.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Tag from "../components/Tags/Tag";
import DropDown from "../components/DropdownList/DropdownList";

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

  return (
    <div className="listing">
      <section className="listingSection">
        <div className="carousel"></div>
        <div className="accomodationDetails">
          <div>
            <h4>{product && product.title}</h4>
            <h6>{product && product.location}</h6>
            <div className="tagsSection">
              {product && product.tags.map((tag) => <Tag tagName={tag} />)}
            </div>
          </div>
          <div className="hostListing">
            <h5>{product && product.host.name}</h5>
            <img
              src={product && product.host.picture}
              alt={product && product.host.name}
            />
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
    </div>
  );
};

export default StayDetails;
