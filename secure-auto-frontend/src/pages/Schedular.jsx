import React, { useState } from "react";

const Schedular = () => {
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("ping");
  const [scheduleTime, setScheduleTime] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !scheduleTime) return;

    const newTask = {
      name: taskName,
      type: taskType,
      time: scheduleTime,
      createdAt: new Date().toLocaleString(),
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
    setScheduleTime("");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Task Scheduler</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Task Name</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="e.g. Daily Ping"
          />
        </div>

        <div>
          <label className="block">Task Type</label>
          <select
            className="border p-2 w-full rounded"
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
          >
            <option value="ping">Ping</option>
            <option value="backup">Backup</option>
            <option value="alert">Alert</option>
            <option value="custom">Custom Script</option>
          </select>
        </div>

        <div>
          <label className="block">Schedule Time</label>
          <input
            type="datetime-local"
            className="border p-2 w-full rounded"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Scheduled Tasks</h3>
        <ul className="mt-2 space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="border p-2 rounded bg-gray-50">
              <strong>{task.name}</strong> – {task.type} at {task.time}
              <div className="text-sm text-gray-500">Added: {task.createdAt}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Schedular;
