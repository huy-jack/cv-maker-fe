"use client";
import React from "react";
import { ArrowRight, FileText, Palette, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleCreateCV = () => {
    router.push("/resume");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32 text-center">
        <div className="animate-fade-in space-y-6">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Create Your Professional CV
            <span className="block text-blue-600">in Minutes</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
            Design, customize, and download your perfect CV with our intuitive builder. Stand out from the crowd with
            professional templates.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              onClick={handleCreateCV}
              className="group text-lg px-8 py-6 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-200"
            >
              Create Your CV
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FileText className="h-6 w-6 text-blue-600" />}
            title="Professional Templates"
            description="Choose from a variety of professionally designed templates that catch the eye."
          />
          <FeatureCard
            icon={<Palette className="h-6 w-6 text-blue-600" />}
            title="Easy Customization"
            description="Personalize colors, fonts, and layouts to match your style and industry."
          />
          <FeatureCard
            icon={<Share2 className="h-6 w-6 text-blue-600" />}
            title="Export & Share"
            description="Download your CV in multiple formats or share directly with employers."
          />
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-gray-400 text-sm font-medium">Trusted by professionals from</div>
            <div className="flex space-x-12">
              <img
                src="/api/placeholder/120/40"
                alt="Company 1"
                className="h-8 grayscale opacity-50 hover:opacity-100 transition-opacity"
              />
              <img
                src="/api/placeholder/120/40"
                alt="Company 2"
                className="h-8 grayscale opacity-50 hover:opacity-100 transition-opacity"
              />
              <img
                src="/api/placeholder/120/40"
                alt="Company 3"
                className="h-8 grayscale opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="space-y-4">
        <div className="inline-block p-3 bg-blue-50 rounded-lg">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="text-gray-600">{description}</div>
      </div>
    </Card>
  );
}
