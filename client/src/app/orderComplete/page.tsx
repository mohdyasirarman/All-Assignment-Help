"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const OrderComplete = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (orderId) {
      setLoading(false);
    } else {
      toast.error("Order ID not found");
      setTimeout(() => {
        router.push("/orderError");
      }, 5000);
    }
  }, [orderId, router]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
        <h1 className="text-xl font-semibold text-[#000000]">
          Loading your order details...
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="text-center mb-8">
        <div className="mx-auto w-24">
          <img
            src="/success.gif"
            alt="Success"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
          Order Created Successfully!
        </h1>
        <p className="text-gray-600 mb-2">
          Your order ID is: <span className="font-semibold">{orderId}</span>
        </p>
        <p className="text-gray-600">
          We will review your order and get back to you shortly.
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => router.push("/orders")}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          View Orders
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default OrderComplete;
