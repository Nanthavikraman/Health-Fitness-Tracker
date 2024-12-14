// src/components/Dashboard.js
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Line } from "react-chartjs-2";
import { getChartData } from "../utils/chartUtils";

function Dashboard() {
  const { user, activities } = useContext(UserContext);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const data = getChartData(activities);
    setChartData(data);
  }, [activities]);

  // Display user progress, steps, health stats, and charts
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      {/* Display stats and charts using chartData */}
      <Line data={chartData} />
    </div>
  );
}

export default Dashboard;
