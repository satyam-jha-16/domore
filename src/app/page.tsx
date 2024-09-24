'use client'
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, ChevronRight, List, Users, Zap } from 'lucide-react';
import Image from "next/image";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <main className="mt-1 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Manage projects with</span>
              <span className="block text-blue-600">ease and efficiency</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Combine the power of visual collaboration and task management in one intuitive platform.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <Button size="lg" className="inline-flex items-center animate-shimmer bg-gradient-to-r from-blue-600 to-blue-700">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
              {/* <Image
                height={200}
                width={200}
                className="w-full"
                src="/someone.png"
                alt="App screenshot"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful features for seamless project management
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Everything you need to manage your projects efficiently and collaboratively.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<List className="h-8 w-8 text-blue-600" />}
              title="Task Management"
              description="Create, assign, and track tasks with ease. Set priorities and deadlines to keep your team on schedule."
            />
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-blue-600" />}
              title="Visual Planning"
              description="Use Kanban boards, Gantt charts, and calendars to visualize your project timeline and progress."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-blue-600" />}
              title="Team Collaboration"
              description="Communicate, share files, and collaborate in real-time with your team members."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Automation"
              description="Streamline your workflow with custom automations and integrations."
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8 text-blue-600" />}
              title="Progress Tracking"
              description="Monitor project progress with customizable dashboards and detailed reports."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-blue-600" />}
              title="Client Portal"
              description="Share project updates and gather feedback from clients through a dedicated portal."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600" />
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:60px_60px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-lg max-h-64">
            <motion.div
              className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to boost your productivity?</span>
            <span className="block">Start using TaskMaster today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Join thousands of teams already using TaskMaster to streamline their projects.
          </p>
          <Button size="lg" variant="secondary" className="mt-8 animate-shimmer bg-gradient-to-r from-gray-100 to-gray-200">
            Sign up for free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                {/* Add Facebook icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                {/* Add Twitter icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                {/* Add GitHub icon */}
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2024 TaskMaster. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
            {icon}
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-2 text-base text-gray-500">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
