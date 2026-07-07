import Link from "next/link";
import { ArrowLeft, LayoutDashboard, Key, Truck, FileText } from "lucide-react";

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-display font-bold text-gray-900 tracking-tight">Riksho Fleet</h2>
          <p className="text-sm text-gray-500 mt-1">Business Portal</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/business/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium">
            <LayoutDashboard size={20} className="text-gray-500" />
            Dashboard
          </Link>
          <Link href="/business/shipments" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium">
            <Truck size={20} className="text-gray-500" />
            Shipments
          </Link>
          <Link href="/business/api-keys" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium">
            <Key size={20} className="text-gray-500" />
            API & Webhooks
          </Link>
          <Link href="/business/invoices" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium">
            <FileText size={20} className="text-gray-500" />
            Invoices
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors font-medium">
            <ArrowLeft size={20} />
            Back to main site
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
