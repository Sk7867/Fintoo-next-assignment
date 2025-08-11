import { PieLabelProps } from "recharts/types/polar/Pie";
export const renderCustomizedLabel = ({ percentage }: PieLabelProps) => {
  return `${percentage}%`;
};
