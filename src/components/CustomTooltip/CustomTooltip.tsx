import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { IAssetAllocation } from "@/models/user-data.interface";

interface ICustomTooltipPros {
  active?: boolean,
  payload?: { payload: IAssetAllocation }[]
}

export const CustomTooltip: React.FC<ICustomTooltipPros> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[var(--card)] p-3 border border-[var(--border)] rounded-lg shadow-lg">
        <p className="font-medium">{data.name}</p>
        <p className="text-sm text-[var(--muted-foreground)]">
          {formatCurrency(data.value)}{" "}
          <span className="text-[var(--profit)]">({data.percentage}%)</span>
        </p>
      </div>
    );
  }
  return null;
};