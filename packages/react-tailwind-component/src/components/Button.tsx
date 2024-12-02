import * as React from "react"

interface ButtonProps {
    onClick?: () => void;
    className?: string;
    size?: string,
    label?: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }: ButtonProps) => {
    return (
        <button
            className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
