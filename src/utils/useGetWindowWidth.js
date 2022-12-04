import React, { useEffect, useState } from "react";

export default function useGetWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, 1000)

  });

  return width;
}
