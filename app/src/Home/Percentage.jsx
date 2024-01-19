import { useState } from "react";
import { loadPercentage } from "../Service/HistoryBalance";
import { useQuery } from "react-query";

function Percentage(props) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["percentage", props.id],
    queryFn: () => loadPercentage(props.id),
  });
  const isPositive = data >= 0;
  const arrow = isPositive ? "↗" : "↘";
  const colorClass = isPositive ? "text-success" : "text-danger";
  return (
    <span className={`ml-auto ${colorClass}`}>
      {arrow} {Math.abs(data)}%
    </span>
  );
}

export default Percentage;
