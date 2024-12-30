"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();

  const Close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      ref={overlay}
      className="fixed left-0 right-0 top-0 bottom-0 bg-black/60"
      onClick={Close}
    >
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg">{children}</div>
    </div>
  );
}
