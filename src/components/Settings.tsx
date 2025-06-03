
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Shield, 
  Key, 
  Users, 
  Bell,
  Database,
  Zap,
  Settings as SettingsIcon,
  CheckCircle
} from "lucide-react";

export const Settings = () => {
  const integrations = [
    { name: "Salesforce CRM", status: "connected", type: "CRM" },
    { name: "SAP ERP", status: "connected", type: "ERP" },
    { name: "Microsoft 365", status: "connected", type: "Productivity" },
    { name: "DocuSign", status: "pending", type: "E-signature" },
    { name: "Slack", status: "disconnected", type: "Communication" }
  ];

  const securitySettings = [
    { label: "Two-factor authentication", enabled: true, description: "Add an extra layer of security" },
    { label: "API access logging", enabled: true, description: "Log all API requests and responses" },
    { label: "Data encryption at rest", enabled: true, description: "Encrypt stored documents and data" },
    { label: "Auto-logout after inactivity", enabled: false, description: "Automatically log out users after 30 minutes" }
  ];

  const notificationSettings = [
    { label: "Workflow completion alerts", enabled: true, description: "Get notified when workflows finish" },
    { label: "Error notifications", enabled: true, description: "Immediate alerts for processing errors" },
    { label: "Weekly performance reports", enabled: true, description: "Automated weekly analytics emails" },
    { label: "System maintenance updates", enabled: false, description: "Notifications about scheduled maintenance" }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your system configuration and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                System Integrations
              </CardTitle>
              <CardDescription>Connect AutoOps AI with your existing business systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{integration.name}</div>
                      <div className="text-sm text-gray-600">{integration.type}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={integration.status === 'connected' ? 'default' : 
                                integration.status === 'pending' ? 'secondary' : 'outline'}
                      >
                        {integration.status}
                      </Badge>
                      {integration.status === 'connected' && (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                  </div>
                ))}
                <Button className="w-full" variant="outline">
                  <Zap className="w-4 h-4 mr-2" />
                  Add New Integration
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security & Compliance
              </CardTitle>
              <CardDescription>Configure security settings and compliance options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securitySettings.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{setting.label}</div>
                      <div className="text-sm text-gray-600">{setting.description}</div>
                    </div>
                    <Switch checked={setting.enabled} />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-blue-900">Compliance Status</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>ISO 27001</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>HIPAA Ready</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
              <CardDescription>Manage how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notificationSettings.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{setting.label}</div>
                      <div className="text-sm text-gray-600">{setting.description}</div>
                    </div>
                    <Switch checked={setting.enabled} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Team Management
              </CardTitle>
              <CardDescription>Manage user access and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Active users</span>
                  <span className="font-semibold">24 / 50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Admin users</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pending invitations</span>
                  <span className="font-semibold">2</span>
                </div>
                <Button className="w-full" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Team
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5" />
                API & Webhooks
              </CardTitle>
              <CardDescription>Configure API access and webhook endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-2">API Keys</div>
                  <div className="text-sm text-gray-600 mb-3">2 active keys</div>
                  <Button size="sm" variant="outline">Manage API Keys</Button>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-2">Webhooks</div>
                  <div className="text-sm text-gray-600 mb-3">3 active endpoints</div>
                  <Button size="sm" variant="outline">Configure Webhooks</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
