import React, { useState } from "react"
import styled from "styled-components"

import SEO from "./seo"
import Image from "./image"

export const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  background: var(--purp);
  margin: 1rem;
  padding: 10px 40px;
  color: var(--xtraPurp);
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  box-shadow: 0 2px 10px rgba(50, 50, 73, 0.2),
    0 37.5px 75px -5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: var(--darkPurp);
    color: var(--bg);
  }
`

const Product = () => {
  const [sku, setSku] = useState("sku_HLr0AQpOhyupho");

  const stripe = window.Stripe("pk_test_powbTm7SuxCdQafatiw61KQm")
  // debugger
  
  const placeOrder = () => {
    stripe
      .redirectToCheckout({
        items: [{ sku, quantity: 1 }],
  
        successUrl: `http://localhost:8000/success`,
        cancelUrl: `http://localhost:8000/cancel`,
      })
  };

  return (
    <div>
      <SEO title="Product Page" />
      <article>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <h3>Spring Rolls</h3>
        <select defaultValue={sku} onChange={e => setSku(e.target.value)}>
          <option value="sku_HLr0AQpOhyupho">Small</option>
          <option value="sku_HLZ7gmqJvWLMTd">Medium</option>
          <option value="sku_HLr0fLK4steII2">Large</option>
        </select>
        <Button onClick={placeOrder}>Buy Me</Button>
      </article>
    </div>
  )
}

export default Product
