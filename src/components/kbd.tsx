import { ReactNode } from "react";

interface KbdProps {
  children: ReactNode;
}

const Kbd: React.FC<KbdProps> = ({ children }) => {
  return (
    <kbd
      className="text-xs px-3 py-0.5 border-1 border-b-3 border-b-amber-600 rounded-sm scale-90"
      style={{ backgroundColor: "var(--card)" }}
    >
      {children}
    </kbd>
  );
};

export default Kbd;
