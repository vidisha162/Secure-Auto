// src/components/SecretCard.jsx
import { Eye, EyeOff, Copy, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const SecretCard = ({ title, content }) => {
  const [show, setShow] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert("Copied to clipboard");
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition duration-200 space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setShow(!show)}
            className="text-gray-600 hover:text-blue-500"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          <button onClick={handleCopy} className="text-gray-600 hover:text-green-500">
            <Copy size={18} />
          </button>
          <button className="text-gray-600 hover:text-yellow-500">
            <Edit size={18} />
          </button>
          <button className="text-gray-600 hover:text-red-500">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        {show ? content : "•••••••••••••••••••"}
      </p>
    </div>
  );
};

export default SecretCard;
