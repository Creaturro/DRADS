import { Timeline } from "./components/Timeline";

export default function App() {
  return (
    <div className="bg-[#1d282f] min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <div className="relative w-full" style={{ height: "2925px" }}>
        <div className="absolute bg-[#25202d] h-full left-0 top-0 w-1/2" />
        <div className="relative w-full h-full">
          <Timeline />
        </div>
      </div>
    </div>
  );
}