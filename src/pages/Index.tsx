
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { DocumentProcessor } from "@/components/DocumentProcessor";
import { WorkflowManager } from "@/components/WorkflowManager";
import { Analytics } from "@/components/Analytics";
import { Settings } from "@/components/Settings";

type ViewType = 'dashboard' | 'documents' | 'workflows' | 'analytics' | 'settings';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'documents':
        return <DocumentProcessor />;
      case 'workflows':
        return <WorkflowManager />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 overflow-auto">
        {renderView()}
      </main>
    </div>
  );
};

export default Index;
