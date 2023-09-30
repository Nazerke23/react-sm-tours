import { useState } from "react";

export default function ExpandText({ children }) {
  const [isExpanded, setIsExpanded] = useState(true);

  //convert to words array
  //show only 10 words
  const words = children
    .split(" ")
    .map((word, index) => (index < 10 ? word : ""))
    .join(" ");

  return (
    <>
      {!isExpanded && words}
      {isExpanded && children}
      <button onClick={() => setIsExpanded((isExpanded) => !isExpanded)}>
        {isExpanded ? "Show less" : "Read more"}
      </button>
    </>
  );
}
