export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Back hidden lines for subtle depth */}
      <path d="M50 10 L15 30 L15 70" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" strokeLinejoin="round"/>
      
      {/* Isometric Cube Wireframe */}
      <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M50 50 L50 10" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M50 50 L15 70" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M50 50 L85 70" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
      
      {/* Center highlight dot */}
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}
