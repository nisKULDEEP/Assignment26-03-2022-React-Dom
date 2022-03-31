import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductDetails = () => {
  let productId = useParams().id;
  //   console.log(productId);
  const [productDetails, setproductDetails] = useState([]);
  // const [errorStatus, setErrorStaus] = useState(false);
  // const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    // setisLoading(true);
    fetch(`http://localhost:3004/products?id=${productId}`)
      .then((res) => res.json())
      .then((res) => {
        setproductDetails(res[0]);
        // setErrorStaus(false);
      })
      .catch((err) => {
        console.log("err");
        // setErrorStaus(true);
      });
    // setisLoading(false);

    return setproductDetails([]);
  }, []);
  console.log(productDetails);

  //  productDetails.name != undefined &&  const { name, id, price } = productDetails;

  const Wrapper = styled.div`
    // border: 1px solid red;
    width: fit-content;
    margin: auto;
    text-alignment: center;
  `;

  return productDetails == undefined ? (
    <h2>`Product does not exist`</h2>
  ) : (
    <Wrapper>
      <h3>Product Details</h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr key={productDetails.id}>
            <td>{productDetails.id}</td>
            <td>{productDetails.name}</td>
            <td>{productDetails.price}</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default ProductDetails;
