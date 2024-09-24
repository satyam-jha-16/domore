'use client'
import Sidebar from '@/components/Sidebar';
import SkeletonLoadingPage from '@/components/SkeletonPage';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { motion } from 'framer-motion';
import { Award, BarChart2, Calendar, Mail, Settings, User } from 'lucide-react';
import React from 'react';

export default function UserPage() {
    const { user, isLoading, isAuthenticated } = useKindeBrowserClient();

    if (isLoading) {
        return (
            <SkeletonLoadingPage />
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Please log in to view your profile.</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="mb-8">
                        <CardContent className="pt-6">
                            <div className="flex flex-col sm:flex-row items-center">
                                <Avatar className="h-24 w-24 mb-4 sm:mb-0 sm:mr-6">
                                    <AvatarImage src={user?.picture || ''} alt={user?.given_name || 'User'} />
                                    <AvatarFallback>{user?.given_name?.[0] || 'U'}</AvatarFallback>
                                </Avatar>
                                <div className="text-center sm:text-left">
                                    <h1 className="text-3xl font-bold text-gray-900">{user?.given_name} {user?.family_name}</h1>
                                    <p className="text-gray-500 flex items-center justify-center sm:justify-start mt-1">
                                        <Mail className="h-4 w-4 mr-2" />
                                        {user?.email}
                                    </p>
                                    <p className="text-gray-500 flex items-center justify-center sm:justify-start mt-1">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        {/* Joined {new Date(user?.created_at || '').toLocaleDateString()} */}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium text-gray-700">Tasks Completed</span>
                                            <span className="text-sm font-medium text-gray-700">75%</span>
                                        </div>
                                        <Progress value={75} className="h-2" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium text-gray-700">Projects Contributed</span>
                                            <span className="text-sm font-medium text-gray-700">60%</span>
                                        </div>
                                        <Progress value={60} className="h-2" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Statistics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <StatItem icon={<Award className="h-8 w-8 text-blue-500" />} label="Achievements" value="12" />
                                    <StatItem icon={<BarChart2 className="h-8 w-8 text-green-500" />} label="Completed Projects" value="8" />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <User className="h-5 w-5 text-gray-500" />
                                        <span className="text-sm font-medium text-gray-700">Update Profile</span>
                                    </div>
                                    <Button variant="outline" size="sm">Edit</Button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Settings className="h-5 w-5 text-gray-500" />
                                        <span className="text-sm font-medium text-gray-700">Account Settings</span>
                                    </div>
                                    <Button variant="outline" size="sm">Manage</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}

const StatItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex items-center space-x-2">
        {icon}
        <div>
            <p className="text-2xl font-semibold">{value}</p>
            <p className="text-sm text-gray-500">{label}</p>
        </div>
    </div>
);
