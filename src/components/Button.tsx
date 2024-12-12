import React from "react";
import { Icon } from "@iconify/react";



//define the props of the button
interface ButtonProps {
    label: string;
    icon: string;
    iconRotation?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, icon, iconRotation = "0deg", onClick}) => {
  return (
    <button    onClick={onClick}  className="flex items-center gap-2 max-w-[180px] pl-8 pr-6 py-4 border rounded-[50px] text-white border-border hover:bg-primary text-sm transition-all duration-300 ease-in-out hover:scale-[90%]">
      {label}{" "}
      <Icon

        icon={icon}
        width="24"
        height="24"
        style={{ transform: `rotate(${iconRotation})` }}
      />
    </button>
  );
};

export default Button;
