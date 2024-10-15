import type { InfoCardProps } from "@/types/Components";

const InfoCard = ({ transformInfo }: InfoCardProps) => {
  return (
    <div className="flex flex-col justify-between items-center w-full p-6 gap-5 bg-white rounded-2xl z-[5000] md:flex-row md:w-auto">
      {transformInfo.map((info, index) => (
        <div
          key={index}
          className="text-center md:min-h-20 md:text-left md:border-r md:border-gray-200 md:pr-10 md:last:border-0"
        >
          <p className="text-xs text-darkGray mb-2">{info.title}</p>
          <h2 className="text-xl text-veryDarkGray font-medium">
            {info.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
