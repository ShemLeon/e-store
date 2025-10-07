import React from "react";
import "./index.css";

const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
];

export function App() {
  return (
    <div>
      <Header />
      <Catalog />
      <Product />
      <Footer />
    </div>
  );
}

export function Header() {
  //  const hours = new Date().getHours();
  const hour = 8;
  console.log(hour);
  const openHours = 9;
  const closeHours = 21;

  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <header className="header">
      <h1>Electronik Store</h1>
      <nav className="nav">
        <ul>
          <li>
            Home
            <a href="#home"></a>
          </li>
          <li>
            Catalog
            <a href="#catalog"></a>
          </li>
          <li>
            About
            <a href="#about"></a>
          </li>
          <li>
            Contacts
            <a href="#contacts"></a>
          </li>
        </ul>
      </nav>

      <div className="working-hours">
        {isOpen ? (
          <p>
            We are currently open. Hours: {openHours}:00 -{closeHours}:00
          </p>
        ) : (
          <p>
            We are closed. Open from {openHours}:00 -{closeHours}:00
          </p>
        )}
      </div>
    </header>
  );
}

function Catalog() {
  return (
    <main className="catalog">
      <ul className="products">
        <Product
          name="Laptop Pro"
          img="/laptop.png"
          price="1200"
          description="High-performance laptop for professionals"
        />
      </ul>
    </main>
  );
}

function Product(props) {
  console.log(props);
  const products = [...productData]; // deep copy of the array

  return (
    <li className="product">
      <img src={products[1].photoName} alt=""></img>
      <div>
        <h3>{products.name}</h3>
        <p>{products[1].description}</p>
        <span>{products[1].price}</span>
      </div>
    </li>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}

export default App;
