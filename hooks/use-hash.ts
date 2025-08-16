'use client'
import React from "react";
function cleanHash() {
  const h = decodeURIComponent(window.location.hash);
  if (h.charCodeAt(0) == "#".charCodeAt(0)) {
    return h.slice(1);
  } else {
    return h;
  }
}

const useHash = () => {
  const [hash, setHash] = React.useState(() => cleanHash());

  const hashChangeHandler = React.useCallback(() => {
      setHash(cleanHash());
  }, []);

  React.useEffect(() => {
    window.addEventListener("hashchange", hashChangeHandler);
    return () => {
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, []);

  const updateHash = React.useCallback(
    (newHash: string) => {
      if (newHash !== hash) window.location.hash = newHash;
    },
    [hash]
  );

  return [hash, updateHash] as const;
};
export default useHash;
