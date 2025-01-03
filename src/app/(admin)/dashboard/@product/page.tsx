"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=product&secret=SiamBonaparte123",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
        setStatus("failed")
    }
    else{
        const respon = await res.json();
        if(respon.revalidate){
            setStatus("success") 
        }  
    }
    

  };

  return (
    <div className="mr-5 w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1>{status}</h1>
      <button className="bg-black p-3 text-white m-5 " onClick={revalidate}>
        Revalidate
      </button>
    </div>
  );
}
