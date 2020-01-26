import React, { useState, useEffect, useRef } from "react";

export const useIntersectionObserver = ({
  root = null,
  rootMargin = "0px",
  threshold = 0
}) => {
  const [entry, setEntry] = useState();
  const [node, setNode] = useState<HTMLDivElement>();

  const observer = useRef(
    new IntersectionObserver(([entry]) => setEntry(entry))
  );

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => setEntry(entry), {
      root,
      rootMargin,
      threshold
    });

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return observer.current.disconnect();
  });

  return [setNode, entry];
};
