import { useMemo } from "react";

function useTruncatedDescription(description: string) {
  return useMemo(() => {
    return description.length > 75
      ? `${description.substring(0, 75)}...`
      : description;
  }, [description]);
}

export default useTruncatedDescription;
