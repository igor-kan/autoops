
import { 
  LayoutDashboard, 
  FileText, 
  Workflow, 
  BarChart3, 
  Settings, 
  Brain,
  Shield,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'documents', label: 'Document Processing', icon: FileText },
    { id: 'workflows', label: 'Workflow Automation', icon: Workflow },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold">AutoOps AI</h1>
            <p className="text-xs text-slate-400">Enterprise Automation</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors",
                    currentView === item.id
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Shield className="w-4 h-4" />
          <span>SOC2 Compliant</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
          <Zap className="w-4 h-4" />
          <span>99.9% Uptime</span>
        </div>
      </div>
    </div>
  );
};
