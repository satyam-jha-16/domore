import { Skeleton } from "@/components/ui/skeleton";
import React from 'react';

const SkeletonLoadingPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        {/* <h1 className="text-2xl font-bold">TaskMaster</h1> */}
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>

      {/* User Profile Section */}
      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
        <Skeleton className="w-16 h-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>

      {/* Activity Section */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-lg shadow space-y-4">
          <Skeleton className="h-4 w-32 bg-gray-300" />
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-2 w-full" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-2 w-full" />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <Skeleton className="h-4 w-32 bg-gray-300" />
          <div className="flex justify-around">
            <div className="text-center">
              <Skeleton className="h-8 w-8 rounded-full mx-auto" />
              <Skeleton className="h-4 w-24 mt-2" />
            </div>
            <div className="text-center">
              <Skeleton className="h-8 w-8 rounded-full mx-auto" />
              <Skeleton className="h-4 w-24 mt-2" />
            </div>
          </div>
        </div></div>

      {/* Settings Section */}
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <Skeleton className="h-4 w-32 bg-gray-300" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-8 w-16" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-8 w-16" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoadingPage;
