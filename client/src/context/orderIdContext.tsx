"use client"
import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";


interface OrderContextType {
  orderId: string;
  setOrderId: Dispatch<SetStateAction<string>>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);


export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orderId, setOrderId] = useState<string>("test_order_id : 2323523");

  return (
    <OrderContext.Provider value={{ orderId, setOrderId }}>
      {children}
    </OrderContext.Provider>
  );
};


export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
