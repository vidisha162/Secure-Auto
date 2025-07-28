import { Home, Lock, Calendar, HelpCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-8">🔒 Secure Auto</h1>
      
      <nav className="flex flex-col gap-4">
        <NavItem icon={<Home size={20} />} label="Dashboard" />
        <NavItem icon={<Lock size={20} />} label="Secrets" />
        <NavItem icon={<Calendar size={20} />} label="Scheduler" />
        <NavItem icon={<HelpCircle size={20} />} label="Help" />
      </nav>
    </aside>
  );
};

const NavItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 cursor-pointer">
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
