import React, { memo, Suspense, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import Card from "./Card";
import { deleteApi } from "./PostApi";

const Axs = memo(() => {
  const res = useLoaderData();
  const [data, setData] = useState(res?.data || []);
  console.log("length", res?.data?.length);
  console.log("Rendering Axs component...");

  const handleDelete = async (id) => {
    await deleteApi(id); // Call API to delete
    setData(data.filter((item) => item.id !== id));
    // Optionally update state or re-fetch data here
  };

  // Render when no data is available
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] p-6 bg-gray-50">
        <AlertCircle className="w-16 h-16 text-yellow-500 mb-4" />
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          No Data Available
        </h2>
        <p className="text-gray-500 text-center">
          There are currently no items to display. Check back later or refresh
          the page.
        </p>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingGrid />}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <Card key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </Suspense>
  );
});

// Loading State Component
export const LoadingGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg animate-pulse"
          >
            <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
            <div className="p-6 space-y-4">
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Axs;
