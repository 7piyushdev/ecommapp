import "./App.css";
import Products from "./components/Products";

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
  return (
    <div className='product-list'>
      {PRODUCTS.map((product) => (
        <Products
          key={product.title}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default App;
