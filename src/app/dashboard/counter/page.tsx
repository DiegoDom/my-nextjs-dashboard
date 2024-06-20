import { Metadata } from "next";
import { CartCounter } from "@/app/shopping-cart";

export const metadata: Metadata = {
  title: "Shopping Cart page",
  description: "This page makes a great example of cliente side components needs",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Shopping Cart Products</span>
      <CartCounter value={1} />
    </div>
  );
}
