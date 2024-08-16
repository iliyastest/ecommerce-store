import ProductApi from "../../_utils/ProductApi";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "../../_components/ProductList";
import BreadCrumb from "../../_components/BreadCrumb";

export const metadata = {
  title: "Products Details",
  description: "Products Details",
};

const fetchProductData = async (productId) => {
  const productDetails = await ProductApi.getProductById(productId);
  const productList = await ProductApi.getProductsByCategory(
    productDetails.data.data.attributes.category
  );
  return {
    productDetails: productDetails.data.data,
    productList: productList.data.data,
  };
};

export default async function ProductDetails({ params }) {
  const { productDetails, productList } = await fetchProductData(
    params?.productId
  );

  return (
    <div className="px-10 py-8 sm:px16 md:px-20 lg:px-28">
      <BreadCrumb />
      <div className="grid justify-around grid-cols-1 gap-5 sm:gap-10 lg:gap-0 mt-10 sm:grid-cols-2">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div>
        <h2 className="mt-24 mb-4 text-xl font-bold">Similar Products</h2>
        <ProductList productList={productList} />
      </div>
    </div>
  );
}
