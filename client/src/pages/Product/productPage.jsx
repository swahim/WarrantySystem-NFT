import "./productPage.css";

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1 className="page-title">Shop</h1>
      <div className="divider divider-product"></div>
      <div className="productContainer">
        <div className="imageContainer">
          <img src="https://media.istockphoto.com/photos/stylish-blue-headphones-on-multi-colored-duo-tone-background-lighting-picture-id1175355990?k=20&m=1175355990&s=612x612&w=0&h=LX5kcpZKWyJQA_Kh5Ub9EwDNpGtAimGr2AePNQJPYxE=" />
        </div>
        <div className="rightContainer">
          <h2>Product Name</h2>
          <h3>Rs. 500</h3>
          <p className="description-product">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque quis nibh sit amet urna cursus consequat. Fusce neque
            enim, efficitur ac dolor vitae, lacinia suscipit tellus. Nam ac
            tincidunt lorem.
          </p>
          <button className="btn-shopnow">Buy with NFT</button>
          <div className="line"></div>
          <div className="product-id">Product Id : 20223</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
