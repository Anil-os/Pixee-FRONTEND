"use client"

import { Sparkles, Zap, ArrowDownToDot } from "lucide-react"
import { PricingSection } from "@/components/pricing-section"

const defaultTiers = [
    {
        name: "Standard",
        price: {
            monthly: 15,
            yearly: 144,
        },
        // description removed
        icon: (
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/30 to-gray-500/30 blur-2xl rounded-full" />
                <Zap className="w-7 h-7 relative z-10 text-gray-500 dark:text-gray-400 animate-[float_3s_ease-in-out_infinite]" />
            </div>
        ),
        features: [
            {
                name: "Store 100,000 photos and 100 videos",
                description: "Generous storage for your needs",
                included: true,
            },
            {
                name: "Business Branding",
                description: "Customize with your logo and colors",
                included: true,
            },
            {
                name: "Bulk Download",
                description: "Download all photos in one click",
                included: true,
            },
        ],
    },
    {
        name: "Pro",
        price: {
            monthly: 49,
            yearly: 470,
        },
        // description removed
        highlight: true,
        badge: "Most Popular",
        icon: (
            <div className="relative">
                <ArrowDownToDot className="w-7 h-7 relative z-10" />
            </div>
        ),
        features: [
            {
                name: "Store 200,000 photos and 200 videos",
                description: "Double the storage capacity",
                included: true,
            },
            {
                name: "Business Branding",
                description: "Full white-label branding options",
                included: true,
            },
            {
                name: "View Client Favorites",
                description: "See which photos your clients love",
                included: true,
            },
            {
                name: "Switch On/Off Downloads",
                description: "Control access to full resolution files",
                included: true,
            },
            {
                name: "50+ gallery themes",
                description: "Beautiful templates for any occasion",
                included: true,
            },
            {
                name: "Bulk Download",
                description: "Efficiently deliver large collections",
                included: true,
            },
            {
                name: "Analytics and Participant Info",
                description: "Detailed insights on gallery engagement",
                included: true,
            },
            {
                name: "Add Watermarks",
                description: "Protect your work automatically",
                included: true,
            },
            {
                name: "Portfolio Website",
                description: "Showcase your best work online",
                included: true,
            },
            {
                name: "Team Login & Controls",
                description: "Manage team access and permissions",
                included: true,
            },
        ],
    },
]

function PricingSectionDemo() {
    return <PricingSection tiers={defaultTiers} />
}

export { PricingSectionDemo }
