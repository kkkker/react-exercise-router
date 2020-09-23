import React, { Component } from "react";
import "./products.css";
import Product from "./product";

class Products extends Component {
  state = {
    products: {},
  };

  componentDidMount() {
    const url = "http://127.0.0.1:5500/src/exercise-2/mockups/data.json";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          products: { ...data },
        });
      });
  }

  render() {
    const products = this.state.products;
    return (
      <div className="products">
        <p>All Products</p>
        {Object.keys(products).map((key) => {
          return <Product key={products[key].id} product={products[key]} />;
        })}
      </div>
    );
  }
}

export default Products;
