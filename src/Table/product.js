import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

export function Products() {
  const [count, setCount] = useState(0);
  const [table, setTable] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setTable(data));
  }, []); // Add an empty dependency array to ensure the useEffect runs only once

  const headers = [
    { label: "Id", key: "id" },
    { label: "TITLE", key: "title" },
    { label: "DESCRIPTION", key: "description" },
    { label: "PRICE", key: "price" },
    { label: "CATEGORY", key: "category" },
    { label: "RATINGS", key: "rating.rate" },
    { label: "COUNT", key: "rating.count" },
  ];

  return (
    <div className="container-fuid">
      <h1 className="head text-center fs-5 fw-5 bg-primary m-5 p-3">PRODUCT DATA-TABLE</h1>
      <CSVLink data={table} headers={headers}>
        <button className="d-flex justify-content-end bg-warning">
          DOWNLOAD EXCEL
        </button>
      </CSVLink>
      <div className="row">
        <div>
            <table className="table table-striped table-bordered">
           
            <thead>
              <tr className="text-center fs-5 bg-success">
                <th>Image</th>
                <th>ID</th>
                <th>Title</th>
                <th className=" px-5">Description</th>
                <th>Price</th>
                <th>Category</th>
                <th className="px-5">Ratings</th>
                <th>Count</th>
                <th>VIEW MORE</th>
              </tr>
            </thead>
            
            <tbody>
              {table.map((value, index) => (
                <tr
                  key={value.id}
                  className="justify-content-center align-items-center p-2 m-2"
                >
                  <td>
                    <img
                      src={value.image}
                      className="image img-fluid"
                      alt={value.title}
                    />
                  </td>
                  <td>{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.description}</td>
                  <td>{value.price}</td>
                  <td>{value.category}</td>
                  <td>
                    <StarRatings 
                      rating={value.rating.rate}
                      starRatedColor="orange"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="2px"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      +
                    </button>
                    <p>{count}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setCount(count - 1);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <Link to={`/table/${value.id}`}>
                      <button className="bg-primary">VIEW..</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
