'use client';
import { useState } from "react";
import AssetAllocation from "@/components/AssetAllocationSection/AssetAllocation";
import Header from "@/components/Header/Header";
import HoldingsTable from "@/components/HoldingsTableSection/HoldingsTable";
import InsightsSection from "@/components/InsightsSection/InsightsSection";
import UserSummaryCard from "@/components/UserSummaryCard/UserSummaryCard";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { snapshots } from "@/data/portfolioData";
import { usePortfolioData } from "@/hooks/usePortfolioData";
const availableDates = Object.keys(snapshots)


export default function Home() {
  const [selectedDate, setSelectedDate] = useState(availableDates[0])
  const { data } = usePortfolioData(selectedDate)

  if (!data) {
    return <div className="container mx-auto px-4 py-6">No Portfolio Data Available</div>
  }
  return (
    <>
      <ThemeProvider>
        <div className="App bg-[var(--header-bg-light)] text-[var(--text-light)] transition-colors duration-[var(--transition-speed)] ease-in-out dark:bg-[var(--header-bg-dark)] dark:text-[var(--text-dark)]">
          <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} datesArray={availableDates} />

          <div className='container mx-auto px-4 py-6 space-y-6'>
            <UserSummaryCard userData={data.userData} />
            <AssetAllocation assetAllocation={data.assetAllocation} />
            <HoldingsTable holdingsData={data.holdingsData} />
            <InsightsSection insights={data.insightsData} />
          </div>

        </div>
      </ThemeProvider>
    </>
  );
}
