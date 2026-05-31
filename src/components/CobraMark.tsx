export default function CobraMark({ className = "" }: { className?: string }) {
  // Marca geométrica: cabeza de cobra estilizada en forma de "S".
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 6c8 0 12 4 12 9s-4 7-9 7-7 2-7 5 3 6 9 6c7 0 13-5 13-13"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* cabeza */}
      <path
        d="M32 26c0-3 2-5 5-5s5 2 5 5c0 4-3 6-5 9-2-3-5-5-5-9z"
        fill="currentColor"
      />
      {/* lengua */}
      <path
        d="M37 35l-2 4m2-4l2 4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* ojo */}
      <circle cx="35.4" cy="25.6" r="1.3" fill="#06121f" />
    </svg>
  );
}
