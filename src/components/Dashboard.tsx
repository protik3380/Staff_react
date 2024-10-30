import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import MenuBar from "./MenuBar";
import { Outlet } from "react-router-dom";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  font-size: 0.9rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;

const StatsGrid = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  flex: 1;
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StatTitle = styled.h3`
  font-size: 1rem;
  color: #888;
`;

const StatValue = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const ChartsGrid = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const ChartCard = styled.div`
  flex: 1;
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Dashboard = () => {
  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Trash Collected",
        backgroundColor: "#A29BFE",
        borderColor: "#6C5CE7",
        borderWidth: 1,
        data: [1000, 1500, 2000, 1700],
      },
    ],
  };

  const doughnutData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#FF7675", "#74B9FF"],
      },
    ],
  };

  return (
    <div className="dashboard">
      <DashboardContainer>
        <MenuBar />

        <h2>OVERVIEW</h2>

        <StatsGrid>
          <StatCard>
            <StatTitle>Total Trash Collected</StatTitle>
            <StatValue>2,000</StatValue>
          </StatCard>
          <StatCard>
            <StatTitle>Total New Trash Collected</StatTitle>
            <StatValue>500</StatValue>
          </StatCard>
          <StatCard>
            <StatTitle>Total Number of Workers</StatTitle>
            <StatValue>10,500</StatValue>
          </StatCard>
        </StatsGrid>

        <ChartsGrid>
          <ChartCard>
            <h3>TRASH COLLECTED</h3>
            <Bar data={barData} />
          </ChartCard>

          <ChartCard>
            <h3>WORKERS STATISTICS</h3>
            <Doughnut data={doughnutData} />
          </ChartCard>
        </ChartsGrid>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
