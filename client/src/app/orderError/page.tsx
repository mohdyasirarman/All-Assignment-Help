"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const orderError = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <div className="mx-auto w-24">
        <Image
          src="/error.gif"
          alt="Error"
          width={96}
          height={96}
          className="h-full w-full object-contain"
        />
      </div>
      <h1 className="mb-4 mt-8 text-2xl font-semibold text-red-600">
        Order Creation Failed
      </h1>
      <p className="mb-8 text-center text-gray-600">
        We encountered an error while processing your order. Please try again.
      </p>
      <button
        onClick={() => router.push("/order")}
        className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
};

export default orderError;