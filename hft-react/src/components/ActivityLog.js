// src/components/ActivityLog.js
import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { TextField, Button } from "@mui/material";
import { logActivity } from "../services/DataService";

function ActivityLog() {
  const { user, setActivities } = useContext(UserContext);
  const [activityType, setActivityType] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await logActivity(user.uid, { type: activityType, value });
    setActivities((prevActivities) => [...prevActivities, response.data]);
    // Reset form
    setActivityType("");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for activity type and value */}
      <Button type="submit">Log Activity</Button>
    </form>
  );
}

export default ActivityLog;
