// src/components/ui/mob-input.tsx
const MobInput: React.FC = () => {
  // Added type annotation for TypeScript
  return (
    <div className="flex items-center">
      <button
        id="dropdown-phone-button"
        data-dropdown-toggle="dropdown-phone"
        className="w-full px-2 mb-5 relative flex-shrink-0 z-10 inline-flex items-center py-2.5 text-center text-gray-900 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
        type="button"
      >
        <svg
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 me-2"
          viewBox="0 0 20 15"
        >
          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
          <mask
            id="a"
            style={{ maskType: "luminance" }} // Changed to camelCase
            width="20"
            height="15"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
          </mask>
          <g mask="url(#a)">
            <path
              fill="#D02F44"
              fillRule="evenodd" // Changed to camelCase
              d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
              clipRule="evenodd" // Changed to camelCase
            />
            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
            {/* ... other unchanged SVG code ... */}
          </g>
          {/* ... other unchanged SVG code ... */}
        </svg>
        +1{" "}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round" // Changed to camelCase
            strokeLinejoin="round" // Changed to camelCase
            strokeWidth="2" // Changed to camelCase
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div className="relative w-full">
        <input
          type="text"
          id="phone-input"
          className="bg-[#f6f6fa] border rounded p py-3 w-full" // Updated styling
          placeholder="123-456-7890"
          required
        />
      </div>
    </div>
  );
};

export default MobInput;
