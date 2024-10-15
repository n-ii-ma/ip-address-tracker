"use client";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl">{error.message}</h2>
      <button
        className="mt-4 text-xl p-2 bg-black text-white rounded-md"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
