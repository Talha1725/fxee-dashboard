"use client";

import { useEffect, useRef } from "react";

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
}

export default function QRCode({ value, size = 200, className = "" }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !value) return;

    // For now, we'll display the value as an image from the backend
    // The backend will generate the QR code and send it as a data URL
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
    };
    img.src = value;
  }, [value, size]);

  if (value.startsWith('data:image')) {
    // If it's already a data URL from backend, use img tag
    return (
      <img 
        src={value} 
        alt="QR Code" 
        width={size} 
        height={size} 
        className={className}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
    />
  );
}