import { Skeleton } from "@/components/ui/skeleton";
import React from 'react';

const DashboardLoader: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            {/* Table Header */}
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
                {[...Array(2)].map((_, index) => (
                    <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-6 w-32" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardLoader;
