import { ComponentType } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  icon: ComponentType<React.ComponentProps<"svg">>;
  onClick: React.ComponentProps<"button">["onClick"];
}

const Button: React.FC<ButtonProps> = ({ children, icon, onClick }) => {
  const Icon = icon;
  return (
    <button
      type="button"
      className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
      onClick={onClick}
    >
      {Icon && <Icon className="size-4 me-1" />}
      {children}
    </button>
  );
};

export default Button;
