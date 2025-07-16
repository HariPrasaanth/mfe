import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
};
