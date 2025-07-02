import { SpeedCard } from "./components/SpeedCard";
import { WeeksCard } from "./components/WeeksCard";
import { MonthsCard } from "./components/MonthsCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start max-w-4xl mx-auto">
        <SpeedCard />
        <WeeksCard />
        <MonthsCard />
      </div>
    </div>
  );
}