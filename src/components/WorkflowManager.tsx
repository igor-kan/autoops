
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  Settings, 
  Users, 
  CheckCircle,
  Clock,
  AlertTriangle,
  ArrowRight,
  Plus
} from "lucide-react";

interface WorkflowStep {
  id: string;
  name: string;
  type: 'ai' | 'human' | 'system';
  status: 'completed' | 'active' | 'pending';
  assignee?: string;
}

interface Workflow {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'draft';
  triggerCount: number;
  successRate: number;
  avgProcessingTime: string;
  steps: WorkflowStep[];
}

export const WorkflowManager = () => {
  const [workflows] = useState<Workflow[]>([
    {
      id: '1',
      name: 'Invoice Processing & Approval',
      description: 'Automated invoice validation, data extraction, and approval routing',
      status: 'active',
      triggerCount: 147,
      successRate: 98.6,
      avgProcessingTime: '3.2 min',
      steps: [
        { id: '1', name: 'Document Classification', type: 'ai', status: 'completed' },
        { id: '2', name: 'Data Extraction', type: 'ai', status: 'completed' },
        { id: '3', name: 'Validation Rules', type: 'system', status: 'active' },
        { id: '4', name: 'Manager Review', type: 'human', status: 'pending', assignee: 'Sarah Chen' },
        { id: '5', name: 'ERP Integration', type: 'system', status: 'pending' }
      ]
    },
    {
      id: '2',
      name: 'Contract Risk Assessment',
      description: 'AI-powered contract analysis and legal review workflow',
      status: 'active',
      triggerCount: 23,
      successRate: 94.2,
      avgProcessingTime: '12.7 min',
      steps: [
        { id: '1', name: 'Contract Parsing', type: 'ai', status: 'completed' },
        { id: '2', name: 'Risk Analysis', type: 'ai', status: 'completed' },
        { id: '3', name: 'Legal Review', type: 'human', status: 'active', assignee: 'Legal Team' },
        { id: '4', name: 'Approval Decision', type: 'human', status: 'pending', assignee: 'David Kim' }
      ]
    },
    {
      id: '3',
      name: 'Customer Service Automation',
      description: 'Automated response generation and escalation handling',
      status: 'paused',
      triggerCount: 89,
      successRate: 91.5,
      avgProcessingTime: '1.8 min',
      steps: [
        { id: '1', name: 'Request Classification', type: 'ai', status: 'completed' },
        { id: '2', name: 'Response Generation', type: 'ai', status: 'completed' },
        { id: '3', name: 'Quality Check', type: 'human', status: 'pending', assignee: 'Support Team' }
      ]
    }
  ]);

  const getStepIcon = (type: string, status: string) => {
    if (status === 'completed') return <CheckCircle className="w-4 h-4 text-green-600" />;
    if (status === 'active') return <Clock className="w-4 h-4 text-blue-600 animate-pulse" />;
    return <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>;
  };

  const getStepTypeColor = (type: string) => {
    switch (type) {
      case 'ai': return 'bg-purple-100 text-purple-800';
      case 'human': return 'bg-blue-100 text-blue-800';
      case 'system': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Workflow Automation</h1>
          <p className="text-gray-600 mt-2">Design and manage your automated business processes</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Workflow
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Active Workflows</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">12</div>
            <p className="text-sm text-gray-600">Running smoothly</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tasks Processed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">1,247</div>
            <p className="text-sm text-gray-600">This week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Average Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">96.8%</div>
            <p className="text-sm text-gray-600">Across all workflows</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {workflows.map((workflow) => (
          <Card key={workflow.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-3">
                    {workflow.name}
                    <Badge 
                      variant={workflow.status === 'active' ? 'default' : 
                              workflow.status === 'paused' ? 'secondary' : 'outline'}
                    >
                      {workflow.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="mt-2">{workflow.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    {workflow.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{workflow.triggerCount}</div>
                  <div className="text-sm text-gray-600">Times triggered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{workflow.successRate}%</div>
                  <div className="text-sm text-gray-600">Success rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{workflow.avgProcessingTime}</div>
                  <div className="text-sm text-gray-600">Avg. processing time</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Workflow Steps</h4>
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {workflow.steps.map((step, index) => (
                    <div key={step.id} className="flex items-center gap-2 min-w-0">
                      <div className="flex flex-col items-center gap-2 min-w-max">
                        <div className="flex items-center gap-2">
                          {getStepIcon(step.type, step.status)}
                          <Badge variant="outline" className={getStepTypeColor(step.type)}>
                            {step.type.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-900 truncate max-w-24">
                            {step.name}
                          </div>
                          {step.assignee && (
                            <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                              <Users className="w-3 h-3" />
                              {step.assignee}
                            </div>
                          )}
                        </div>
                      </div>
                      {index < workflow.steps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-gray-400 mx-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
