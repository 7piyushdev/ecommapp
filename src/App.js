import "./App.css";
import Header from "./components/navbar/Header";
import Products from "./components/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const PRODUCTS = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const productItems = PRODUCTS.map((product) => (
    <Products
      key={product.title}
      title={product.title}
      image={product.imageUrl}
      price={product.price}
    />
  ));

  return (
    <div>
      <Cart />
      <Header />
      <h1>Ecommerce app</h1>
      <div className='product-list'>{productItems}</div>
    </div>
  );
}

export default App;
