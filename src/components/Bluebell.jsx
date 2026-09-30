import React from 'react';

/**
 * Bluebell Icon component crafted in the Lucide icon aesthetic.
 * Represents an English Bluebell (Hyacinthoides non-scripta) with its
 * signature gracefully nodding arched stem, cascading drooping bell florets,
 * recurved petal tips, and slender foliage.
 *
 * Supports single-color (via className e.g. text-blue-600) with translucent petal body,
 * as well as twoTone={true} for green stem + blue bells.
 */
export function Bluebell({
  className = 'w-6 h-6',
  strokeWidth = 2.2,
  size,
  color = 'currentColor',
  twoTone = false,
  stemColor = '#059669',
  bellColor = '#2563eb',
  ...props
}) {
  if (twoTone) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        width={size}
        height={size}
        aria-hidden="true"
        {...props}
      >
        {/* Stem & foliage in natural green */}
        <path d="M4 21C4 13.5 7 5 16 5c2.5 0 4 1 5 2.5" stroke={stemColor} />
        <path d="M4 21c2.5-4.5 3.5-9.5 3.5-14" stroke={stemColor} />

        {/* Drooping bell florets in bluebell blue */}
        <path d="M18.5 6.5v2M12.5 7.5v2" stroke={bellColor} />
        <path
          d="M18.5 8.5c2 1 3.2 3 3.5 5c-1.2-.8-2.3-.8-3.5 0c-1.2-.8-2.3-.8-3.5 0c.3-2 1.5-4 3.5-5Z"
          stroke={bellColor}
          fill={bellColor}
          fillOpacity={0.18}
        />
        <path
          d="M12.5 9.5c1.7.9 2.7 2.6 3 4.5c-1-.7-2-.7-3 0c-1-.7-2-.7-3 0c.3-1.9 1.3-3.6 3-4.5Z"
          stroke={bellColor}
          fill={bellColor}
          fillOpacity={0.18}
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      {/* Arching nodding stem */}
      <path d="M4 21C4 13.5 7 5 16 5c2.5 0 4 1 5 2.5" />

      {/* Slender basal bluebell foliage */}
      <path d="M4 21c2.5-4.5 3.5-9.5 3.5-14" />

      {/* Pedicels */}
      <path d="M18.5 6.5v2M12.5 7.5v2" />

      {/* Upper terminal nodding bluebell floret with soft translucent petal fill */}
      <path
        d="M18.5 8.5c2 1 3.2 3 3.5 5c-1.2-.8-2.3-.8-3.5 0c-1.2-.8-2.3-.8-3.5 0c.3-2 1.5-4 3.5-5Z"
        fill="currentColor"
        fillOpacity={0.15}
      />

      {/* Lower cascading nodding bluebell floret with soft translucent petal fill */}
      <path
        d="M12.5 9.5c1.7.9 2.7 2.6 3 4.5c-1-.7-2-.7-3 0c-1-.7-2-.7-3 0c.3-1.9 1.3-3.6 3-4.5Z"
        fill="currentColor"
        fillOpacity={0.15}
      />
    </svg>
  );
}

export default Bluebell;
