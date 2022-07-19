import Card from "../../components/productCard/card";
import "./ShopPage.css";
const ShopPage = () => {
  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <div className="divider"></div>
      <div className="productContainer">
        <Card cost="500" productName="Product Name"/>
        <Card cost="500" productName="Product Name"/>
        <Card cost="500" productName="Product Name"/>
        <Card cost="500" productName="Product Name"/>
        <Card cost="500" productName="Product Name"/>
        <Card cost="500" productName="Product Name"/>
        <Card cost="500" productName="Product Name"/>     
      </div>
    </div>
  );
};

export default ShopPage;
