// Dummy data
const DATA = [
  { title: "IP ADDRESS", value: "38.0.101.76" },
  { title: "LOCATION", value: "Mountain View, CA" },
  { title: "TIMEZONE", value: "UTC - 07:00" },
  { title: "ISP", value: "SpaceX Starlink" },
];

const InfoCard = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full p-6 gap-6 bg-white rounded-2xl md:flex-row md:w-auto">
      {DATA.map((item, index) => (
        <div
          key={index}
          className="text-center md:min-h-20 md:text-left md:border-r md:border-gray-200 md:pr-10 md:last:border-0"
        >
          <p className="text-xs text-darkGray mb-2">{item.title}</p>
          <h2 className="text-xl text-veryDarkGray font-medium">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
