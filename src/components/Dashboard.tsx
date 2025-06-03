
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  FileCheck, 
  Clock, 
  AlertTriangle,
  ArrowUpRight,
  Users,
  DollarSign,
  Zap
} from "lucide-react";

export const Dashboard = () => {
  const stats = [
    {
      title: "Documents Processed",
      value: "12,847",
      change: "+23%",
      trend: "up",
      icon: FileCheck,
      color: "text-green-600"
    },
    {
      title: "Time Saved",
      value: "2,340 hrs",
      change: "+18%",
      trend: "up",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      title: "Cost Reduction",
      value: "$186,420",
      change: "+31%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Accuracy Rate",
      value: "98.7%",
      change: "+0.3%",
      trend: "up",
      icon: Zap,
      color: "text-purple-600"
    }
  ];

  const recentTasks = [
    { id: 1, type: "Invoice Processing", status: "Completed", time: "2 mins ago", amount: "$12,450" },
    { id: 2, type: "Contract Review", status: "In Review", time: "5 mins ago", amount: "Legal Team" },
    { id: 3, type: "Customer Request", status: "Auto-Resolved", time: "8 mins ago", amount: "Refund" },
    { id: 4, type: "Compliance Check", status: "Flagged", time: "12 mins ago", amount: "Review Needed" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your automated processes today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                  <span className="text-xs text-green-600">{stat.change}</span>
                  <span className="text-xs text-gray-500 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest automated processes and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="font-medium text-gray-900">{task.type}</p>
                      <p className="text-sm text-gray-500">{task.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">{task.amount}</span>
                    <Badge 
                      variant={task.status === 'Completed' ? 'default' : 
                              task.status === 'Flagged' ? 'destructive' : 'secondary'}
                    >
                      {task.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Performance Insights</CardTitle>
            <CardDescription>How your AI models are performing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Invoice Processing</span>
                  <span className="text-sm text-gray-600">99.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '99.2%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Contract Analysis</span>
                  <span className="text-sm text-gray-600">97.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '97.8%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Customer Service</span>
                  <span className="text-sm text-gray-600">94.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '94.5%' }}></div>
                </div>
              </div>

              <Button className="w-full mt-4" variant="outline">
                <ArrowUpRight className="w-4 h-4 mr-2" />
                View Detailed Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
