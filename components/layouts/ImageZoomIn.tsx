"use client";
import { useState, useRef, useEffect, MouseEvent } from "react";

interface ImageProps {
  image: string;
  scale: number;
  className?: string;
}

export default function ImageZoomIn({ image, scale }: ImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>("scale(1)");
  const [transformOrigin, setTransformOrigin] = useState<string>("50% 50%");

  const handleMouseOver = () => {
    setTransformStyle(`scale(${scale})`);
  };

  const handleMouseOut = () => {
    setTransformStyle("scale(1)");
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();

      let xPos = ((e.pageX - rect.left) / rect.width) * 100;
      let yPos = ((e.pageY - rect.top) / rect.height) * 100;

      xPos = Math.max(0, Math.min(100, xPos));
      yPos = Math.max(0, Math.min(100, yPos));

      setTransformOrigin(`${xPos}% ${yPos}%`);
    }
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.backgroundImage = `url(${image})`;
    }
  }, [image]);

  return (
    <div
      className="product-img--main"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseMove={handleMouseMove}
      style={{
        width: "100%",
        height: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="product-img--main__image"
        ref={imageRef}
        style={{
          transform: transformStyle,
          transformOrigin: transformOrigin,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          transition: "transform 0.3s ease",
        }}
      />
    </div>
  );
}
