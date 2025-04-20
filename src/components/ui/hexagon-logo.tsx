
import React from 'react';
import { cn } from "@/lib/utils";

interface HexagonLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

const HexagonLogo = ({ size = 'md', className, ...props }: HexagonLogoProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  return (
    <div className={cn('relative group', sizeClasses[size], className)} {...props}>
      <div className="absolute inset-0 grid grid-cols-2 gap-[2px]">
        <div className="bg-bookmie-orange rounded-tl-xl rounded-bl-sm"></div>
        <div className="bg-bookmie-orange rounded-tr-sm rounded-br-xl"></div>
        <div className="bg-bookmie-orange rounded-tl-sm rounded-bl-xl"></div>
        <div className="bg-bookmie-orange rounded-tr-xl rounded-br-sm"></div>
      </div>
      <div className="absolute inset-[2px] grid grid-cols-2 gap-[2px] bg-white z-10">
        <div className="bg-bookmie-orange rounded-tl-lg rounded-bl-xs opacity-90"></div>
        <div className="bg-bookmie-orange rounded-tr-xs rounded-br-lg opacity-90"></div>
        <div className="bg-bookmie-orange rounded-tl-xs rounded-bl-lg opacity-90"></div>
        <div className="bg-bookmie-orange rounded-tr-lg rounded-br-xs opacity-90"></div>
      </div>
    </div>
  );
};

export { HexagonLogo };
