"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { BugReportButton } from "@/components/bug-report-button";
import { clusters } from "@/data/clusters";
import {
  BookOpen,
  FileText,
  Video,
  ClipboardCheck,
  Users,
  Award,
  Mail,
  ExternalLink,
  Briefcase,
  Lightbulb,
  DollarSign,
  Building,
  Megaphone,
} from "lucide-react";

export default function HomePage() {
  // Map cluster IDs to icons and colors for the cards
  const clusterIcons = {
    "business-administration": {
      icon: Briefcase,
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    entrepreneurship: {
      icon: Lightbulb,
      color: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    finance: {
      icon: DollarSign,
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    "hospitality-tourism": {
      icon: Building,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    marketing: {
      icon: Megaphone,
      color: "bg-red-100",
      iconColor: "text-red-600",
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-100 via-white to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Minimal Header - Top Right */}
      <header className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
          <div className="flex justify-end gap-2">
            <BugReportButton />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-2 sm:pb-4">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="mb-2 sm:mb-4">
              <div className="flex flex-col items-center mb-4 sm:mb-6">
                <div className="relative w-72 sm:w-80 md:w-96 h-auto mb-3 sm:mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/oregon-deca-logo.png"
                    alt="Oregon DECA Logo"
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#00529b]">
                  Prep Kits
                </h1>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Comprehensive preparation resources for DECA members.
              </p>
              <a
                href="https://oregondeca.org/wp-content/uploads/2025/12/Oregon-DECA-Emerging-Leader-Exam-Study-Guide-25-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
              >
                Emerging Leader Exam Study Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clusters Section - Using "Why Choose" card style */}
      <section className="py-4 sm:py-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {clusters.map((cluster) => {
              const clusterConfig = clusterIcons[
                cluster.id as keyof typeof clusterIcons
              ] || {
                icon: BookOpen,
                color: "bg-gray-100",
                iconColor: "text-gray-600",
              };
              const IconComponent = clusterConfig.icon;

              // Map cluster colors to full gradient classes
              const gradientClasses: Record<string, string> = {
                "business-administration":
                  "bg-gradient-to-br from-yellow-500 to-yellow-700",
                entrepreneurship: "bg-gradient-to-br from-gray-600 to-gray-800",
                finance: "bg-gradient-to-br from-green-600 to-green-800",
                "hospitality-tourism":
                  "bg-gradient-to-br from-blue-800 to-blue-950",
                marketing: "bg-gradient-to-br from-red-600 to-red-800",
              };

              const cardGradient =
                gradientClasses[cluster.id] ||
                "bg-gradient-to-br from-gray-600 to-gray-800";

              return (
                <Link
                  key={cluster.id}
                  href={`/${cluster.id}`}
                  className="block w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
                >
                  <div
                    className={`${cardGradient} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border-0 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] h-full cursor-pointer active:scale-[0.98]`}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-sm">
                      <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                      {cluster.name}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90">
                      {cluster.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 px-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Three simple steps to maximize your DECA competition preparation.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/50 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
                    1
                  </span>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  Choose Your Cluster
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Select from Business Administration, Entrepreneurship,
                  Finance, Hospitality & Tourism, or Marketing to access
                  cluster-specific resources.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    2
                  </span>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Access Resources
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Watch roleplay videos, download cheat sheets, practice with
                  interactive tests, and study with flashcards designed for your
                  cluster.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900/50 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">
                    3
                  </span>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                  Excel in Competition
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Master your cluster&apos;s content, practice your roleplays,
                  and walk into your DECA competition with confidence and
                  preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/95 dark:bg-gray-950/95 backdrop-blur-sm text-white relative mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                To provide comprehensive, accessible preparation resources that
                empower Oregon DECA members to excel in their competitions and
                develop essential business skills.
              </p>
            </div>

            {/* About */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                About Prep Kits
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                Oregon DECA Prep Kits is a comprehensive resource platform
                designed to help students prepare for DECA competitions across
                all five career clusters.
              </p>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Available Resources
              </h3>
              <ul className="text-sm sm:text-base text-gray-300 space-y-2">
                <li className="flex items-center">
                  <Video className="h-4 w-4 mr-2" />
                  Roleplay Videos
                </li>
                <li className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Cheat Sheets
                </li>
                <li className="flex items-center">
                  <ClipboardCheck className="h-4 w-4 mr-2" />
                  Practice Tests
                </li>
                <li className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Interactive Flashcards
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col items-center justify-center gap-4">
              {/* Contact and Website Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:careerdevelopmentvp@oregondeca.org"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
                <a
                  href="https://oregondeca.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm sm:text-base"
                >
                  <ExternalLink className="h-4 w-4" />
                  Oregon DECA Website
                </a>
              </div>

              {/* Copyright */}
              <p className="text-sm sm:text-base text-gray-400 text-center">
                © {new Date().getFullYear()} Oregon DECA Prep Kits. Built for
                Oregon DECA members.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
