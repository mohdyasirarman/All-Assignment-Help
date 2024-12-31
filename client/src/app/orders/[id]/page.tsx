"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, FileText, Download, ArrowLeft } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface OrderDetails {
  orderid: number;
  title: string;
  desc: string;
  subject: string;
  type: string;
  deadline: number;
  details: {
    status: number;
    teacher_id?: string;
  };
  value?: {
    value: number;
  };
  files: Array<{
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

export default function OrderDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const data = await apiClient.getOrderDetails(params.id as string);
        setOrder(data);
      } catch (error) {
        console.error('Error fetching order details:', error);
        toast.error('Failed to load order details');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchOrderDetails();
    }
  }, [params.id]);

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

  if (!order) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8">
          <p className="mb-4 text-lg text-gray-500">Order not found</p>
          <Button onClick={() => router.push('/orders')}>Back to Orders</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => router.push('/orders')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Orders
      </Button>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Order #{order.orderid}</CardTitle>
                <Badge className={statusMap[order.details?.status ?? 0].color}>
                  {statusMap[order.details?.status ?? 0].label}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Title</h3>
                  <p>{order.title}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Description</h3>
                  <p className="whitespace-pre-wrap">{order.desc}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 font-semibold">Subject</h3>
                    <p>{order.subject}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Type</h3>
                    <p>{order.type}</p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 font-semibold">Deadline</h3>
                    <p>{formatDate(order.deadline)}</p>
                  </div>
                  {order.value?.value && (
                    <div>
                      <h3 className="mb-2 font-semibold">Value</h3>
                      <p>${order.value.value}</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Attached Files</CardTitle>
            </CardHeader>
            <CardContent>
              {order.files && order.files.length > 0 ? (
                <div className="space-y-4">
                  {order.files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="text-sm">{file.original_file_name}</span>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No files attached</p>
              )}
            </CardContent>
          </Card>

          {order.details?.teacher_id && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Assigned Teacher</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Teacher ID: {order.details.teacher_id}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
