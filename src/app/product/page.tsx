import { cache } from "react";
import { getData } from "@/services/products";
import Link from "next/link";

type ProductPageProps = { params: { slug: string[] } };

const ProductPage = async (props: ProductPageProps) => {
  const { params } = props;
  const Product = await getData("http://localhost:3000/api/product");
  console.log(Product);

  return (
    <div className=" grid grid-cols-4 mt-5 place-items-center">
      {/* <h1>{params.slug ? "Detail Product" : "Product"}</h1> */}
      {Product.data.length > 0 &&
        Product.data.map((Product: any) => (
          <Link href={`/product/detail/${Product.id}`}
            key={Product.id}
            className="my-5 w-11/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="p-8 rounded-t-lg object-cover h-96 w-full"
              src={Product.image}
              alt="product image"
            />

            <div className="px-5 pb-5">

                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {Product.name}
                </h5>


              <div className="flex items-center justify-between mt-5">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${Product.price}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      {params.slug && (
        <>
          <p>Category :{params.slug[0]}</p>
          <p>Product :{params.slug[1]}</p>
          <p>Price :{params.slug[2]}</p>
        </>
      )}
    </div>
  );
};

export default ProductPage;

//sdns
