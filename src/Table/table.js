import React, {useState,useEffect} from "react";
import { CSVLink } from "react-csv";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function ProductDetails() {
    var {id}=useParams()
    const [details, setDetails] = useState([])
        useEffect(() => {
            fetch("https://fakestoreapi.com/products/"+id)
                .then(response => response.json())
                .then(data => setDetails(data))
        })
    const headers = [
    { label: "Id", key: "id" },
    { label: "TITLE", key: "title" },
    { label: "DESCRIPTION", key: "description" },
    { label: "PRICE", key: "price" },
    { label: "CATEGORY", key: "category" },
    { label: "RATINGS", key: "rating.rate" },
    { label: "COUNT", key: "rating.count" },
    ];
    const dataArray=[details]

    return (
        <>
            
            <div className="row ">
                <div className="col-lg-6 container-fluid">
                   <img src={details.image}/>
                </div>
                <div className="col-lg-6 container-fluid">
                    <h1 className="card-title">{details.title}</h1>
                                    
                    <p className="para">{details.description}</p>
                    <p className="card-content">{details.price}</p>
                     <p className="para">{details.category}</p>
                    <p className="card-content">{<StarRatings 
                      rating={details.rating &&  details.rating.rate}
                      starRatedColor="orange"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="2px"
                    />}</p>
                    <CSVLink data={dataArray} headers={headers} className="text-dark"><button className="btn btn-warning">DOWNLOAD</button></CSVLink>
                    
                </div>
                
            </div>


        </>
    );
}