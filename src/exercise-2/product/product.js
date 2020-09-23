import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./product.css";

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="product">
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </div>
    );
  }
}

export default Product;
