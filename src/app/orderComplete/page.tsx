"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useOrder } from "../context/orderIdContext";
import { useRouter } from "next/navigation";

const OrderComplete = () => {
  const { orderId } = useOrder();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (orderId) {
      setLoading(false); 
    } else {
     
      setTimeout(() => {
        router.push("/orderError"); 
      }, 5000);
    }
  }, [orderId, router]);
                console.log(orderId)
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
      <div className="text-center space-y-6 max-w-sm w-full">
        <h1 className="text-xl font-semibold text-[#000000]">
          Submission Successful
        </h1>

        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center">
            <Image
              src={"/static/images/circle.png"}
              alt="complete"
              height={50}
              width={50}
            />
          </div>
        </div>

        <div className="text-[#0A0D13] text-lg">
          Assignment {orderId} Confirmed
        </div>

        <button
          className="w-full py-2 px-4 bg-[#55C360] text-white rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          Go to Order
        </button>

        <p className="text-sm text-[#9DA3A1]">Ask for Customer Support</p>
      </div>
    </div>
  );
};

export default OrderComplete;
