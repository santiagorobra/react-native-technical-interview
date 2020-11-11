import React, { useCallback, useState } from "react";
import _ from "lodash";

export const useDebounce = (obj) => {
  const [state, setState] = useState(obj);

  const setDebouncedState = (_val) => {
    debounce(_val);
  };

  const debounce = useCallback(
    _.debounce((_prop) => {
      setState(_prop);
    }, 500),
    []
  );

  return [state, setDebouncedState];
};