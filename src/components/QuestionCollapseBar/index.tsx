import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-5xl">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between px-3 py-4 w-full h-[60px]  rounded-xl bg-[#f2f2f5] cursor-pointer transition-all mt-4
        ${
          isOpen
            ? "bg-[#f2f2f5] text-black rounded-bl-none rounded-br-none"
            : "text-black "
        }
        hover:bg-[#b8002b] hover:text-white`}
      >
        <p className="text-[20px] font-medium">{question}</p>

        {/* Chevron icon */}
        {isOpen ? (
          // Chevron up
          <svg
            className="w-5 h-5 fill-current transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 12.21a.75.75 0 001.06.02L10 8.56l3.71 3.67a.75.75 0 101.04-1.08l-4.25-4.2a.75.75 0 00-1.04 0l-4.25 4.2a.75.75 0 00-.02 1.06z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          // Chevron down
          <svg
            className="w-5 h-5 fill-current transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.77 7.79a.75.75 0 00-1.06-.02L10 11.44 6.29 7.77a.75.75 0 00-1.04 1.08l4.25 4.2a.75.75 0 001.04 0l4.25-4.2a.75.75 0 00.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {isOpen && (
        <div className="bg-[#f2f2f5] text-black text-lg font-normal p-5 rounded-b-xl mb-2 transition-all">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
