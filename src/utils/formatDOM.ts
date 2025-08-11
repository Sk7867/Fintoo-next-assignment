interface IRenderCustomizedLabelProps {
  percentage: unknown;
}
export const renderCustomizedLabel = ({
  percentage,
}: IRenderCustomizedLabelProps) => {
  return `${percentage}%`;
};
