"use client";

import { Upload, Plus, Search, Filter } from "lucide-react";

export default function ShipmentsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Shipments</h1>
          <p className="text-gray-500">Manage, track, and bulk-upload your fleet logistics.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors">
            <Upload size={18} />
            Bulk CSV Upload
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors">
            <Plus size={18} />
            New Shipment
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by ID or destination..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md text-sm font-medium transition-colors">
            <Filter size={16} />
            Filter
          </button>
        </div>

        {/* Table Mock */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white border-b border-gray-200 text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium">Tracking ID</th>
                <th className="px-6 py-4 font-medium">Origin</th>
                <th className="px-6 py-4 font-medium">Destination</th>
                <th className="px-6 py-4 font-medium">Vehicle</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SHP-10492</td>
                <td className="px-6 py-4 text-gray-600">Factory A, Okhla</td>
                <td className="px-6 py-4 text-gray-600">Warehouse B, Noida</td>
                <td className="px-6 py-4 text-gray-600">Mini Truck (500kg)</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    In Transit
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-900 font-medium">Track</button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SHP-10491</td>
                <td className="px-6 py-4 text-gray-600">Factory A, Okhla</td>
                <td className="px-6 py-4 text-gray-600">Retail C, Gurgaon</td>
                <td className="px-6 py-4 text-gray-600">Tempo (200kg)</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Finding Driver
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-900 font-medium">Cancel</button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SHP-10490</td>
                <td className="px-6 py-4 text-gray-600">Factory B, Surat</td>
                <td className="px-6 py-4 text-gray-600">Port D, Mumbai</td>
                <td className="px-6 py-4 text-gray-600">Truck (2000kg)</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-900 font-medium">View POD</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
