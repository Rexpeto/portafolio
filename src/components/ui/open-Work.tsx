import { cn } from "@/libs";

const OpenWork = ({ working }: { working: boolean }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 bg-gray-850/80 border rounded-md py-2 px-4",
        working ? "border-green-600/40" : "border-red-600/40",
      )}
    >
      <div className="relative flex items-center justify-center h-3 w-3">
        <span
          className={cn(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            working ? "bg-green-400" : "bg-red-400",
          )}
        ></span>
        <span
          className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            working ? "bg-green-500" : "bg-red-500",
          )}
        ></span>
      </div>

      <p
        className={cn(
          "text-sm font-semibold",
          working ? "text-green-500" : "text-red-500",
        )}
      >
        {working ? "Available for work" : "Not available for work"}
      </p>
    </div>
  );
};

export default OpenWork;
