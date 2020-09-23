import React, { Component } from "react";
import "./details.css";

class ProductDetails extends Component {
  state = {};

  componentDidMount() {
    const url = "http://127.0.0.1:5500/src/exercise-2/mockups/data.json";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const productId = Number(this.props.match.params.id);
        const productKey = Object.keys(data).filter((key) => {
          return data[key].id === productId;
        });
        this.setState({
          product: data[productKey],
        });
      });
  }

  render() {
    const product = this.state.product;
    if (product === undefined) {
      return <div className="product-details"></div>;
    }
    return (
      <div className="product-details">
        <h4>Product Details</h4>
        <p>Name: {product.name}</p>
        <p>Id: {product.id}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Desc: {product.desc}</p>
        <p>URL: {this.props.match.url}</p>
      </div>
    );
  }
}

export default ProductDetails;
