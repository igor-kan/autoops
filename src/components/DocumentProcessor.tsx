
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  Download,
  Eye,
  Zap
} from "lucide-react";
import { toast } from "sonner";

interface ProcessedDocument {
  id: string;
  name: string;
  type: string;
  status: 'processing' | 'completed' | 'error';
  confidence: number;
  extractedData: Record<string, any>;
  uploadedAt: string;
}

export const DocumentProcessor = () => {
  const [documents, setDocuments] = useState<ProcessedDocument[]>([
    {
      id: '1',
      name: 'Invoice_ABC_Corp_2024.pdf',
      type: 'Invoice',
      status: 'completed',
      confidence: 98.7,
      extractedData: {
        vendor: 'ABC Corporation',
        amount: '$12,450.00',
        dueDate: '2024-02-15',
        invoiceNumber: 'INV-2024-001'
      },
      uploadedAt: '2 minutes ago'
    },
    {
      id: '2',
      name: 'Contract_NDA_XYZ.docx',
      type: 'Contract',
      status: 'processing',
      confidence: 0,
      extractedData: {},
      uploadedAt: '5 minutes ago'
    },
    {
      id: '3',
      name: 'Customer_Complaint_Form.pdf',
      type: 'Customer Service',
      status: 'completed',
      confidence: 95.2,
      extractedData: {
        customer: 'John Smith',
        issue: 'Shipping Delay',
        priority: 'Medium',
        category: 'Logistics'
      },
      uploadedAt: '12 minutes ago'
    }
  ]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const newDoc: ProcessedDocument = {
          id: Date.now().toString() + Math.random().toString(),
          name: file.name,
          type: 'Processing...',
          status: 'processing',
          confidence: 0,
          extractedData: {},
          uploadedAt: 'Just now'
        };
        
        setDocuments(prev => [newDoc, ...prev]);
        
        // Simulate processing
        setTimeout(() => {
          setDocuments(prev => prev.map(doc => 
            doc.id === newDoc.id 
              ? { 
                  ...doc, 
                  status: 'completed', 
                  type: 'Invoice',
                  confidence: Math.random() * 10 + 90,
                  extractedData: {
                    vendor: 'Sample Vendor',
                    amount: '$' + (Math.random() * 10000 + 1000).toFixed(2),
                    dueDate: '2024-02-20'
                  }
                } 
              : doc
          ));
          toast.success(`${file.name} processed successfully!`);
        }, 3000);
      });
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-600 animate-spin" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Document Processing</h1>
        <p className="text-gray-600 mt-2">Upload and process documents with AI-powered extraction</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upload Documents</CardTitle>
            <CardDescription>
              Drag and drop files or click to upload. Supports PDF, Word, Excel, and image formats.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-2">Drop files here to upload</p>
              <p className="text-gray-600 mb-4">or</p>
              <label htmlFor="file-upload">
                <Button asChild>
                  <span>Choose Files</span>
                </Button>
              </label>
              <Input
                id="file-upload"
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                onChange={handleUpload}
                className="hidden"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Processing Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Today</span>
                <span className="font-semibold">47 documents</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">This week</span>
                <span className="font-semibold">312 documents</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Average accuracy</span>
                <span className="font-semibold text-green-600">97.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Processing time</span>
                <span className="font-semibold">~2.3 minutes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
          <CardDescription>Track the status of your uploaded documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  {getStatusIcon(doc.status)}
                  <div>
                    <p className="font-medium text-gray-900">{doc.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{doc.type}</Badge>
                      {doc.status === 'completed' && (
                        <span className="text-sm text-green-600">
                          {doc.confidence.toFixed(1)}% confidence
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{doc.uploadedAt}</span>
                  {doc.status === 'completed' && (
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
