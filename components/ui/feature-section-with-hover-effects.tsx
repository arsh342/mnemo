import { cn } from "@/lib/utils";
import {
  Eye,
  Brain,
  RotateCcw,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Passive Capture",
      description:
        "Mnemo silently tracks tab usage patterns, dwell time, and engagement signals in the background.",
      icon: <Eye className="w-8 h-8" />,
    },
    {
      title: "Smart Scoring",
      description:
        "Each tab receives an importance score based on your behavior. Low-scoring tabs get archived automatically.",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: "Instant Recovery",
      description:
        "Search, browse, or get AI suggestions to restore any archived tab with complete context intact.",
      icon: <RotateCcw className="w-8 h-8" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-[#e8e8ed] dark:border-neutral-800",
        (index === 0) && "lg:border-l border-[#e8e8ed] dark:border-neutral-800",
        "lg:border-b border-[#e8e8ed] dark:border-neutral-800",
        "lg:border-t border-[#e8e8ed] dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#f5f5f7] dark:from-neutral-800 to-transparent pointer-events-none" />
      
      <div className="mb-4 relative z-10 px-10 text-[#8b7bff]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#8b7bff] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#1d1d1f] dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-[#6e6e73] dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
