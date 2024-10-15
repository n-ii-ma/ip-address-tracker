// Skeleton for the InfoCard
const InfoCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full p-6 gap-6 bg-white rounded-2xl z-[5000] md:flex-row md:w-auto">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="animate-pulse flex flex-col items-center md:items-start md:min-h-20 md:text-left md:border-r md:border-gray-200 md:pr-10 md:last:border-0"
          >
            <div className="bg-gray-300 rounded h-4 w-16 mb-2"></div>
            <div className="bg-gray-400 rounded h-6 w-24"></div>
          </div>
        ))}
    </div>
  );
};

export default InfoCardSkeleton;
