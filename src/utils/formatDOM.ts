interface IRenderCustomizedLabelProps {
  percentage: number;
}
export const renderCustomizedLabel = ({
  percentage,
}: IRenderCustomizedLabelProps) => {
  return `${percentage}%`;
};
