// src/components/ui/card.jsx
export function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}
