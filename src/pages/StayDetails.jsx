import React from "react";
import "../style/StayDetails.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const StayDetails = () => {
  const [product, setProduct] = useState(null);
  const { stayDetailsId } = useParams();

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
      <h4>{product && product.title}</h4>
      <h6>{product && product.location}</h6>
    </div>
  );
};

export default StayDetails;
