"use client"
import { createContext, useState, useContext } from "react";

const OrderContext = createContext<{ orderId: string; setOrderId: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orderId, setOrderId] = useState<string>("123456_this_is_test"); 

  return (
    <OrderContext.Provider value={{ orderId, setOrderId }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  return context;
};
