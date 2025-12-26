"use client";

import { useState } from "react";
import {
  Stepper,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import {
  Check,
  Download,
  FolderOpen,
  Settings,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const installationSteps = [
  {
    title: "Download Extension",
    description: "Download mnemo.zip from the website",
    icon: Download,
  },
  {
    title: "Extract Files",
    description: "Unzip the downloaded file to a folder",
    icon: FolderOpen,
  },
  {
    title: "Enable Developer Mode",
    description: "Turn on Developer mode in your browser",
    icon: Settings,
  },
  {
    title: "Load Extension",
    description: 'Click "Load unpacked" and select folder',
    icon: CheckCircle2,
  },
];

export default function StepperDemo() {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    if (activeStep < installationSteps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--clay-bg)] p-8">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-[var(--clay-text)]">
            Installation Guide
          </h1>
          <p className="text-lg text-[var(--clay-text-muted)]">
            Follow these simple steps to install Mnemo extension
          </p>
        </div>

        {/* Horizontal Stepper */}
        <div className="clay-card p-8">
          <h2 className="text-xl font-semibold mb-6 text-[var(--clay-text)]">
            Horizontal Layout with Navigation
          </h2>
          <Stepper
            className="flex flex-col gap-8"
            value={activeStep}
            onValueChange={setActiveStep}
            orientation="horizontal"
            indicators={{
              completed: <Check className="size-4" />,
            }}
          >
            <StepperNav>
              {installationSteps.map((step, index) => (
                <StepperItem key={index} step={index + 1}>
                  <StepperTrigger>
                    <StepperIndicator className="data-[state=completed]:bg-green-500 data-[state=completed]:text-white">
                      {index + 1}
                    </StepperIndicator>
                    <div className="hidden md:block text-left">
                      <StepperTitle>{step.title}</StepperTitle>
                      <StepperDescription>
                        {step.description}
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                  {index < installationSteps.length - 1 && (
                    <StepperSeparator className="group-data-[state=completed]/step:bg-green-500" />
                  )}
                </StepperItem>
              ))}
            </StepperNav>

            <StepperPanel>
              {installationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <StepperContent key={index} value={index + 1}>
                    <div className="flex flex-col items-center gap-4 p-8 text-center">
                      <div className="rounded-full bg-[var(--clay-accent)]/10 p-4">
                        <Icon className="size-8 text-[var(--clay-accent)]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-[var(--clay-text)]">
                          {step.title}
                        </h3>
                        <p className="text-[var(--clay-text-muted)] max-w-md">
                          {step.description}
                        </p>
                      </div>
                      {index === 0 && (
                        <div className="mt-4 space-y-3 text-left w-full max-w-md">
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Click the download button on the homepage
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Or download directly from{" "}
                            <code className="bg-gray-100 px-2 py-1 rounded">
                              /public/mnemo.zip
                            </code>
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Save it to a location you'll remember
                          </p>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="mt-4 space-y-3 text-left w-full max-w-md">
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Right-click the downloaded zip file
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Select "Extract All" or use your preferred
                            extraction tool
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Choose a permanent location for the folder
                          </p>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="mt-4 space-y-3 text-left w-full max-w-md">
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Open your browser's extensions page:
                          </p>
                          <code className="block bg-gray-100 px-3 py-2 rounded text-xs">
                            Chrome: chrome://extensions
                            <br />
                            Edge: edge://extensions
                            <br />
                            Brave: brave://extensions
                            <br />
                            Arc: arc://extensions
                          </code>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Toggle "Developer mode" ON (usually top-right)
                          </p>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="mt-4 space-y-3 text-left w-full max-w-md">
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Click the "Load unpacked" button
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Navigate to and select the extracted mnemo folder
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Grant permissions when prompted
                          </p>
                          <p className="text-sm font-semibold text-green-600 mt-4">
                            ✓ Installation complete! Start managing your tabs
                            intelligently.
                          </p>
                        </div>
                      )}
                    </div>
                  </StepperContent>
                );
              })}
            </StepperPanel>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={handlePrevious}
                disabled={activeStep === 1}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--clay-text)] rounded-full font-semibold hover:bg-[var(--clay-hover)] transition-all border border-[var(--clay-border)] shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              {activeStep < installationSteps.length ? (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--clay-accent)] text-white rounded-full font-semibold hover:bg-[var(--clay-accent-hover)] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setActiveStep(1)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Check className="w-4 h-4" />
                  Start Over
                </button>
              )}
            </div>
          </Stepper>
        </div>

        {/* Vertical Stepper */}
        <div className="clay-card p-8">
          <h2 className="text-xl font-semibold mb-6 text-[var(--clay-text)]">
            Vertical Layout
          </h2>
          <div className="flex items-center justify-center">
            <Stepper
              className="flex flex-col items-center justify-center gap-10"
              defaultValue={2}
              orientation="vertical"
              indicators={{
                completed: <Check className="size-4" />,
              }}
            >
              <StepperNav>
                {installationSteps.map((step, index) => (
                  <StepperItem
                    key={index}
                    step={index + 1}
                    className="relative items-start not-last:flex-1"
                  >
                    <StepperTrigger className="items-start pb-12 last:pb-0 gap-2.5">
                      <StepperIndicator className="data-[state=completed]:bg-green-500 data-[state=completed]:text-white data-[state=active]:bg-[var(--clay-accent)] data-[state=active]:text-white data-[state=inactive]:text-gray-500">
                        {index + 1}
                      </StepperIndicator>
                      <div className="mt-0.5 text-left">
                        <StepperTitle>{step.title}</StepperTitle>
                        <StepperDescription>
                          {step.description}
                        </StepperDescription>
                      </div>
                    </StepperTrigger>
                    {index < installationSteps.length - 1 && (
                      <StepperSeparator className="absolute inset-y-0 top-7 left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper-nav:h-[calc(100%-2rem)] group-data-[state=completed]/step:bg-green-500" />
                    )}
                  </StepperItem>
                ))}
              </StepperNav>

              <StepperPanel className="text-sm w-full max-w-md">
                {installationSteps.map((step, index) => (
                  <StepperContent key={index} value={index + 1}>
                    <div className="rounded-lg border border-[var(--clay-border)] bg-white p-6">
                      <h3 className="font-semibold text-[var(--clay-text)] mb-2">
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-sm text-[var(--clay-text-muted)]">
                        {step.description}
                      </p>
                    </div>
                  </StepperContent>
                ))}
              </StepperPanel>
            </Stepper>
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div className="clay-card p-8">
          <h2 className="text-xl font-semibold mb-4 text-[var(--clay-text)]">
            Troubleshooting
          </h2>
          <div className="space-y-3 text-sm text-[var(--clay-text-muted)]">
            <div className="flex gap-3">
              <span className="text-[var(--clay-accent)] font-bold">•</span>
              <p>
                <strong className="text-[var(--clay-text)]">
                  Extension not loading?
                </strong>{" "}
                Make sure you selected the correct folder containing the
                manifest.json file
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--clay-accent)] font-bold">•</span>
              <p>
                <strong className="text-[var(--clay-text)]">
                  Permissions error?
                </strong>{" "}
                Grant all requested permissions for full functionality
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--clay-accent)] font-bold">•</span>
              <p>
                <strong className="text-[var(--clay-text)]">
                  Not working properly?
                </strong>{" "}
                Try disabling and re-enabling the extension
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
