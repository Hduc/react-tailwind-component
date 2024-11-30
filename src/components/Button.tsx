import * as React from "react"

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }:ButtonProps) => {
    return (
        <button
            className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
