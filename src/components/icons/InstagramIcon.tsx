import React from 'react';

interface InstagramIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const InstagramIcon: React.FC<InstagramIconProps> = ({
  className = 'w-4 h-4',
  size = 24,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <defs>
      <linearGradient id="ig-gradient-brand" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#F56040" />
        <stop offset="50%" stopColor="#E1306C" />
        <stop offset="75%" stopColor="#C13584" />
        <stop offset="100%" stopColor="#833AB4" />
      </linearGradient>
    </defs>
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5.5"
      stroke="url(#ig-gradient-brand)"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="12"
      r="4.2"
      stroke="url(#ig-gradient-brand)"
      strokeWidth="2"
    />
    <circle
      cx="17.5"
      cy="6.5"
      r="1.2"
      fill="url(#ig-gradient-brand)"
    />
  </svg>
);
