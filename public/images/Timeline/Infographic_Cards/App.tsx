import InfographicTemplateFrontend from "./imports/InfographicTemplateFrontend";
import InfographicTemplateBriefAdapted from "./imports/InfographicTemplateBriefAdapted";
import InfographicTemplateLiveTestingAdapted from "./imports/InfographicTemplateLiveTestingAdapted";
import InfographicTemplateDesignAdapted from "./imports/InfographicTemplateDesignAdapted";
import InfographicTemplateApisAdapted from "./imports/InfographicTemplateApisAdapted";

// Blue-gray theme cards
import InfographicTemplateResearchAdapted from "./imports/InfographicTemplateResearchAdapted";
import InfographicTemplateDesign925Adapted from "./imports/InfographicTemplateDesign925Adapted";
import InfographicTemplateFrontend938Adapted from "./imports/InfographicTemplateFrontend938Adapted";
import InfographicTemplateBackend995Adapted from "./imports/InfographicTemplateBackend995Adapted";
import InfographicTemplateTestingAdapted from "./imports/InfographicTemplateTestingAdapted";
import InfographicTemplateDevopsAdapted from "./imports/InfographicTemplateDevopsAdapted";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-6 text-gray-800">
            Infographic Card Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A collection of responsive infographic cards
            showcasing different aspects of modern web
            development workflow. Available in two color themes:
            purple and blue-gray variants.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#25202d] rounded"></div>
              <span>Purple Theme</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#1d282f] rounded"></div>
              <span>Blue-Gray Theme</span>
            </div>
          </div>
        </div>

        {/* Purple Theme Cards */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl mb-8 text-gray-700">
              Purple Theme Collection
            </h2>
          </div>

          {/* Frontend Card - Purple */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl mb-6 text-gray-700 text-center">
              1. Asynchronous Frontend Coding
            </h3>
            <div className="w-full max-w-[595px] rounded-lg overflow-hidden shadow-xl">
              <InfographicTemplateFrontend />
            </div>
          </div>

          {/* Brief Card - Purple */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl mb-6 text-gray-700 text-center">
              2. Brief and Research
            </h3>
            <div className="w-full max-w-[595px] rounded-lg overflow-hidden shadow-xl">
              <InfographicTemplateBriefAdapted />
            </div>
          </div>

          {/* Live Testing Card - Purple */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl mb-6 text-gray-700 text-center">
              3. Live Testing
            </h3>
            <div className="w-full max-w-[595px] rounded-lg overflow-hidden shadow-xl">
              <InfographicTemplateLiveTestingAdapted />
            </div>
          </div>

          {/* Design Card - Purple */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl mb-6 text-gray-700 text-center">
              4. Asynchronous Design Work
            </h3>
            <div className="w-full max-w-[595px] rounded-lg overflow-hidden shadow-xl">
              <InfographicTemplateDesignAdapted />
            </div>
          </div>

          {/* APIs Card - Purple */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl mb-6 text-gray-700 text-center">
              5. "Glueing" Systems Through APIs
            </h3>
            <div className="w-full max-w-[595px] rounded-lg overflow-hidden shadow-xl">
              <InfographicTemplateApisAdapted />
            </div>
          </div>
        </div>

        {/* Blue-Gray Theme Cards */}
        <div className="space-y-12 pt-16 border-t-2 border-gray-200">
          <div className="text-center">
            <h2 className="text-3xl mb-8 text-gray-700">
              Blue-Gray Theme Collection
            </h2>
          </div>

          {/* Research Card - Blue-Gray */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl mb-6 text-gray-700 text-center">
              1. Brief and Research
            </h3>
            <div className="w-full max-w-[595px] rounded-lg overflow-hidden shadow-xl">
              <InfographicTemplateResearchAdapted />
            </div>
          </div>

          {/* UI/UX Design Card - Blue-Gray */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl mb-6 text-gray-700 text-center">
              2. UI/UX Design
            </h3>
            <div className="w-full max-w-[595px] rounded-lg overflow-hidden shadow-xl">
              <InfographicTemplateDesign925Adapted />
            </div>
          </div>

          {/* Frontend Coding Card - Blue-Gray */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl mb-6 text-gray-700 text-center">
              3. Frontend Coding
            </h3>
            <div className="w-full max-w-[595px] rounded-lg overflow-hidden shadow-xl">
              <InfographicTemplateFrontend938Adapted />
            </div>
          </div>

          {/* Backend Coding Card - Blue-Gray */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl mb-6 text-gray-700 text-center">
              4. Backend Coding
            </h3>
            <div className="w-full max-w-[595px] rounded-lg overflow-hidden shadow-xl">
              <InfographicTemplateBackend995Adapted />
            </div>
          </div>

          {/* Testing Card - Blue-Gray */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl mb-6 text-gray-700 text-center">
              5. Testing
            </h3>
            <div className="w-full max-w-[595px] rounded-lg overflow-hidden shadow-xl">
              <InfographicTemplateTestingAdapted />
            </div>
          </div>

          {/* DevOps Card - Blue-Gray */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl mb-6 text-gray-700 text-center">
              6. Setting up the production environment
            </h3>
            <div className="w-full max-w-[595px] rounded-lg overflow-hidden shadow-xl">
              <InfographicTemplateDevopsAdapted />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 pb-8">
          <p className="text-gray-500 text-sm mb-2">
            Responsive infographic cards built with React and
            Tailwind CSS
          </p>
          <p className="text-gray-400 text-xs">
            11 cards total • 2 color themes • Fully responsive
            design
          </p>
        </div>
      </div>
    </div>
  );
}