import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "ML Personalization",
    description: "Learns your browsing patterns to protect important tabs automatically."
  },
  {
    title: "Smart Search",
    description: "TF-IDF powered search with instant results across all archived tabs."
  },
  {
    title: "Privacy First",
    description: "100% local processing. Your data never leaves your device."
  },
  {
    title: "Auto Archiving",
    description: "Automatically archives inactive tabs while preserving full context."
  },
  {
    title: "Instant Restore",
    description: "One-click restoration with exact scroll position recovery."
  },
  {
    title: "Timeline View",
    description: "Complete browsing history with session restoration."
  },
  {
    title: "Passive Capture",
    description: "Silently tracks tab usage patterns and engagement signals in the background."
  },
  {
    title: "Smart Scoring",
    description: "Assigns importance scores to tabs based on behavior to guide archiving decisions."
  },
];

function Feature() {
  return (
    <div id="features" className="w-full py-20 lg:py-40 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Features</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-[#1d1d1f]">
              Everything You Need
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-[#6e6e73]">
              Intelligent tab management with powerful features that work seamlessly together.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-4 h-4 mt-2 text-[#8b7bff] flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-[#1d1d1f]">{feature.title}</p>
                    <p className="text-[#6e6e73] text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
