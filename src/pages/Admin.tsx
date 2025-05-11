
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Package, 
  Users, 
  ShoppingBag, 
  BarChart3, 
  Settings, 
  AlertCircle 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const AdminDashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated or not an admin
  useEffect(() => {
    if (isAuthenticated && user?.role !== 'admin') {
      navigate('/');
    }
  }, [isAuthenticated, user, navigate]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,546.78</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              +12.3% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">164</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              +5.4% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">524</div>
            <p className="text-xs text-gray-500 flex items-center mt-1">
              12 out of stock
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,543</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main dashboard tabs */}
      <Tabs defaultValue="orders">
        <TabsList className="w-full justify-start border-b mb-8">
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" /> Orders
          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Package className="h-4 w-4" /> Products
          </TabsTrigger>
          <TabsTrigger value="customers" className="flex items-center gap-2">
            <Users className="h-4 w-4" /> Customers
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" /> Analytics
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" /> Settings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Manage your recent orders</CardDescription>
            </CardHeader>
            <CardContent>
              {/* This would typically be a data table component */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 grid grid-cols-12 text-sm font-medium text-gray-500">
                  <div className="col-span-2">Order ID</div>
                  <div className="col-span-3">Customer</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-2">Amount</div>
                  <div className="col-span-1">Action</div>
                </div>
                
                <div className="divide-y">
                  {/* Sample order rows */}
                  {[
                    {
                      id: 'ORD-1234',
                      customer: 'John Doe',
                      date: '2023-05-12',
                      status: 'Completed',
                      amount: 123.45,
                    },
                    {
                      id: 'ORD-1235',
                      customer: 'Jane Smith',
                      date: '2023-05-11',
                      status: 'Processing',
                      amount: 56.78,
                    },
                    {
                      id: 'ORD-1236',
                      customer: 'Bob Johnson',
                      date: '2023-05-10',
                      status: 'Shipped',
                      amount: 98.76,
                    },
                    {
                      id: 'ORD-1237',
                      customer: 'Alice Brown',
                      date: '2023-05-09',
                      status: 'Pending',
                      amount: 234.56,
                    },
                  ].map(order => (
                    <div key={order.id} className="p-4 grid grid-cols-12 items-center">
                      <div className="col-span-2">{order.id}</div>
                      <div className="col-span-3">{order.customer}</div>
                      <div className="col-span-2">{order.date}</div>
                      <div className="col-span-2">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          order.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : order.status === 'Processing'
                            ? 'bg-blue-100 text-blue-800'
                            : order.status === 'Shipped'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="col-span-2">${order.amount.toFixed(2)}</div>
                      <div className="col-span-1">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Manage Products</CardTitle>
              <CardDescription>Add, edit, or remove products</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end mb-4">
                <Button>Add Product</Button>
              </div>
              
              <p>Product management interface would go here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle>Customer Management</CardTitle>
              <CardDescription>View and manage customer accounts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Customer management interface would go here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics & Reports</CardTitle>
              <CardDescription>View sales performance and statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Analytics dashboard would go here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure store settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Settings interface would go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
