import { useState } from "react";

function Secrets() {
  const [secrets, setSecrets] = useState([
    {
      id: 1,
      title: "My Email Password",
      content: "encrypted_password_123",
    },
    {
      id: 2,
      title: "Bank PIN",
      content: "encrypted_pin_456",
    },
  ]);

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    alert("Copied to clipboard!");
  };

  const handleDelete = (id) => {
    const confirmed = confirm("Are you sure you want to delete this secret?");
    if (confirmed) {
      setSecrets((prev) => prev.filter((secret) => secret.id !== id));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Vault</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {secrets.map((secret) => (
          <div
            key={secret.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{secret.title}</h3>
            <p className="text-gray-600 mt-2">{secret.content}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleCopy(secret.content)}
                className="px-3 py-1 bg-blue-500 text-white rounded-md"
              >
                Copy
              </button>
              <button
                onClick={() => alert("Edit coming soon")}
                className="px-3 py-1 bg-yellow-400 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(secret.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Secrets;
