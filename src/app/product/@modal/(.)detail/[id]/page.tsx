import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const Product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  // id nama folder
  return (
    <Modal>
      <img
        className="w-full object-cover aspect-square col-span-2"
        src={Product.data.image}
      />
      <div className="bg-white p-4 px-6">
        <h3>{Product.data.name}</h3>
        <p>proce : ${Product.data.price}</p>
      </div>
    </Modal>
  );
}
