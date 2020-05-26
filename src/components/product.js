import React, { useState } from "react"
import styled from "styled-components"

import SEO from "./seo"

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

const Product = ({skus, product, images}) => {
  const [sku, setSku] = useState(skus[2].node.id);

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
          <img src={`${images[2]}`} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <select defaultValue={sku} onBlur={e => setSku(e.target.value)}>
          {skus.map(edge => (
            <option key={edge.node.id} value={edge.node.id}>
              {edge.node.attributes.name}
            </option>
          ))}
        </select>
        <Button onClick={placeOrder}>Buy Me</Button>
      </article>
    </div>
  )
}

export default Product
