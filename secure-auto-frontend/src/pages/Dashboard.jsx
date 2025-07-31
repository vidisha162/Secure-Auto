import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import EntryCard from "../components/EntryCard";
import {
  LockKeyhole,
  Clock,
  ShieldCheck,
  Cpu,
  Plus,
  Calendar,
} from "lucide-react";

const dashboardData = [
  {
    title: "Total Secrets",
    value: 42,
    icon: <LockKeyhole className="text-blue-500" />,
  },
  {
    title: "Scheduled Tasks",
    value: 8,
    icon: <Clock className="text-green-500" />,
  },
  {
    title: "Security Checks",
    value: "Passed",
    icon: <ShieldCheck className="text-purple-500" />,
  },
  {
    title: "Auto Scripts",
    value: 12,
    icon: <Cpu className="text-orange-500" />,
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Replace this with your actual API call
    const fetchEntries = async () => {
      try {
        const res = await fetch("/api/entries");
        const data = await res.json();
        setEntries(data.entries || []);
      } catch (err) {
        console.error("Failed to fetch entries:", err);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Dashboard Overview</h2>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/schedular")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm"
          >
            <Calendar size={18} /> View Scheduler
          </button>
          <button
            onClick={() => navigate("/add-entry")}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm"
          >
            <Plus size={18} /> Create New Entry
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardData.map((item, idx) => (
          <Card key={idx} className="shadow-md">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h3 className="text-xl font-bold">{item.value}</h3>
              </div>
              <div className="bg-gray-100 p-2 rounded-full">{item.icon}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Placeholder Chart */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center text-gray-500">
        📊 Analytics chart section coming soon...
      </div>

      {/* Render Entry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.length > 0 ? (
          entries.map((entry, index) => (
            <EntryCard key={index} entry={entry} />
          ))
        ) : (
          <p className="text-gray-500">No entries to show.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
