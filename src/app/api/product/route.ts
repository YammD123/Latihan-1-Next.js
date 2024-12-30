import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextResponse } from "next/server";
import { title } from "process";

const data = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 100000,
    image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a710787c-70eb-489b-a37a-8c5d3d0f3fc2/AIR+MAX+DN.png"
  },
  {
    id: 2,
    title: "Sepatu Baru Dong",
    price: 1000000,
    image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93fc4ff3-039a-47e5-8938-aeb743b2c00d/W+AIR+MAX+DN+ISA.png"
  },
  {
    id: 3,
    title: "Sepatu Nikke Air",
    price: 10000,
    image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93fc4ff3-039a-47e5-8938-aeb743b2c00d/W+AIR+MAX+DN+ISA.png"
  },
  {
    id: 4,
    title: "Sepatu Nikke Air 44",
    price: 10000,
    image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93fc4ff3-039a-47e5-8938-aeb743b2c00d/W+AIR+MAX+DN+ISA.png"
  },
  {
    id: 5,
    title: "Sepatu Nikke Air 55",
    price: 10000,
    image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93fc4ff3-039a-47e5-8938-aeb743b2c00d/W+AIR+MAX+DN+ISA.png"
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retrieveDataById("product",id);  //pemanggilan dari firebase
    if(detailProduct){
        return NextResponse.json({
            status: 200,
            message: "Success",
            data: detailProduct,
          });
    }
    return NextResponse.json({
        status: 404,
        message: "Not Found",
        data: {},
      });

  }

  const products = await retrieveData("product"); //pemanggilan dari firebase

  return NextResponse.json({ status: 200, message: "Success", data:products });
}
