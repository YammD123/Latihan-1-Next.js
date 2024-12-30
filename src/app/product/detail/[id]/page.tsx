import { getData } from "@/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const Product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  // id nama folder
  return (
<div className="container mx-auto my-10">
    <div className="w-1/2 mx-auto border border-gray-200">
    <img
        className="w-full object-cover aspect-square col-span-2"
        src={Product.data.image}
      />
      <div className="bg-white p-4 px-6">
        <h3>{Product.data.name}</h3>
        <p>proce : ${Product.data.price}</p>
      </div>
    </div>
</div>
  );
}
