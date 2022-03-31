import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  // border: 1px solid red;
  width: fit-content;
  margin: auto;
  text-alignment: center;
`;

const Products = () => {
  let [data, usData] = React.useState([]);
  const [showErr, setShowErr] = React.useState(false);

  React.useEffect(() => {
    fetch(`http://localhost:3004/products`)
      .then((res) => res.json())
      .then((res) => {
        usData(res);
        setShowErr(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("DJKDHFDH");
        setShowErr(true);
      });
  }, []);

  //   console.log(data);
  return showErr ? (
    <h2>Product does not exist</h2>
  ) : (
    <Wrapper>
      <h3>Products</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, price }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>
                <Link to={`/products/${id}`}> More Details..</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Products;
