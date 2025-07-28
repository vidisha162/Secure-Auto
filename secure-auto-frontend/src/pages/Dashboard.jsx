import { Card, CardContent } from "../components/ui/card";
import { LockKeyhole, Clock, ShieldCheck, Cpu } from "lucide-react";

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
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Dashboard Overview</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
    </div>
  );
};

export default Dashboard;
