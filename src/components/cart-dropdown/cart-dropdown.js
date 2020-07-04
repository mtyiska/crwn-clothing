import React from "react";
import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";

export default function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-item" />

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
