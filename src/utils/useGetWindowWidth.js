import React from "react";

export default function useGetWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return width;
}
