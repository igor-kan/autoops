
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  Download,
  Filter
} from "lucide-react";

export const Analytics = () => {
  const metrics = [
    {
      title: "Processing Volume",
      value: "2,847",
      change: "+23.1%",
      trend: "up",
      period: "vs last month"
    },
    {
      title: "Accuracy Rate",
      value: "97.8%",
      change: "+1.2%",
      trend: "up",
      period: "vs last month"
    },
    {
      title: "Cost Savings",
      value: "$186,420",
      change: "+31.4%",
      trend: "up",
      period: "vs last month"
    },
    {
      title: "Processing Time",
      value: "2.3 min",
      change: "-12.5%",
      trend: "down",
      period: "vs last month"
    }
  ];

  const departmentStats = [
    { dept: "Finance", docs: 1247, accuracy: 98.9, savings: "$89,420" },
    { dept: "Legal", docs: 156, accuracy: 96.7, savings: "$34,890" },
    { dept: "HR", docs: 892, accuracy: 97.1, savings: "$28,340" },
    { dept: "Operations", docs: 552, accuracy: 98.2, savings: "$33,770" }
  ];

  const workflowPerformance = [
    { workflow: "Invoice Processing", volume: 1247, accuracy: 98.9, avgTime: "2.1 min" },
    { workflow: "Contract Review", volume: 156, accuracy: 96.7, avgTime: "12.3 min" },
    { workflow: "Customer Service", volume: 892, accuracy: 97.1, avgTime: "1.8 min" },
    { workflow: "Compliance Check", volume: 552, accuracy: 98.2, avgTime: "5.7 min" }
  ];

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Insights</h1>
          <p className="text-gray-600 mt-2">Monitor performance and track ROI across all automated processes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="flex items-center">
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-green-600 mr-1" />
                )}
                <span className="text-xs text-green-600">{metric.change}</span>
                <span className="text-xs text-gray-500 ml-1">{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
            <CardDescription>Processing volume and accuracy by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{dept.dept}</div>
                    <div className="text-sm text-gray-600">{dept.docs} documents processed</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">{dept.savings}</div>
                    <div className="text-sm text-green-600">{dept.accuracy}% accuracy</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Workflow Performance</CardTitle>
            <CardDescription>Efficiency metrics for each automated workflow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {workflowPerformance.map((workflow, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-gray-900">{workflow.workflow}</div>
                    <Badge variant="outline">{workflow.avgTime}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>Volume: {workflow.volume}</div>
                    <div>Accuracy: {workflow.accuracy}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ROI Analysis</CardTitle>
          <CardDescription>Return on investment from automation implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">342%</div>
              <div className="text-sm text-gray-600">ROI in 12 months</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$847K</div>
              <div className="text-sm text-gray-600">Annual cost savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2,340</div>
              <div className="text-sm text-gray-600">Hours saved per month</div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-900 mb-2">Key Insights</h4>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• Invoice processing automation has reduced manual work by 89%</li>
              <li>• Contract review time decreased from 2 hours to 12 minutes on average</li>
              <li>• Customer service response time improved by 67%</li>
              <li>• Error rates dropped from 5.2% to 0.8% across all processes</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
