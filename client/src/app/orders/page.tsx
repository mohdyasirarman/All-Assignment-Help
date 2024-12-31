"use client";

import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api-client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

interface Order {
  orderid: number;
  title: string;
  desc: string;
  subject: string;
  type: string;
  deadline: number;
  details?: {
    status: number;
    teacher_id?: string;
  };
  value?: {
    value: number;
  };
  files?: Array<{
    file_name: string;
    original_file_name: string;
  }>;
}

const statusMap: Record<number, { label: string; color: string }> = {
  0: { label: 'Pending', color: 'bg-yellow-500' },
  1: { label: 'In Progress', color: 'bg-blue-500' },
  2: { label: 'Completed', color: 'bg-green-500' },
  3: { label: 'Cancelled', color: 'bg-red-500' },
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await apiClient.getAllOrders();
        setOrders(orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Orders</h1>
        <Button onClick={() => router.push('/order')}>New Order</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <Card key={order.orderid} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">#{order.orderid}</CardTitle>
                <Badge className={statusMap[order.details?.status ?? 0].color}>
                  {statusMap[order.details?.status ?? 0].label}
                </Badge>
              </div>
              <CardDescription className="mt-2 line-clamp-1">{order.title}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Subject:</span> {order.subject}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Type:</span> {order.type}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Deadline:</span> {formatDate(order.deadline)}
                </p>
                {order.value?.value && (
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Value:</span> ${order.value.value}
                  </p>
                )}
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Files:</span>{' '}
                  {order.files?.length ?? 0} attached
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => router.push(`/orders/${order.orderid}`)}
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {orders.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8">
          <p className="mb-4 text-lg text-gray-500">No orders found</p>
          <Button onClick={() => router.push('/order')}>Create Your First Order</Button>
        </div>
      )}
    </div>
  );
}
