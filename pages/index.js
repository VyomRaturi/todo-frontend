import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { ethers } from "ethers";
import * as Constants from "../Utils/congif";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  useEffect(() => {
    const connectToMetamask = async () => {
      console.log("Contract Address : " + Constants.CONTRACT_ADDRESS);
      console.log("Contract ABI : " + Constants.CONTRACT_ABI);
      console.log("API URL : " + Constants.API_URL);
      console.log("Private Key : " + Constants.PRIVATE_KEY);
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          console.log("Metamask Connected : " + address);
          const contract = new ethers.Contract(
            Constants.CONTRACT_ADDRESS,
            Constants.CONTRACT_ABI,
            signer
          );
          const _tasks = await contract.getAllTasks();
          setTasks(_tasks);
          console.log(_tasks);
        } else {
          console.log("Install Metamask");
        }
      } catch (e) {
        console.log(e);
      }
    };
    connectToMetamask();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      const error = await response.json();
      console.log(error);
    }

    const resp = await response.json();
    const status = resp.message;
    console.log(status);
  };

  const changeTaskStatus = async (taskID) => {
    const response = await fetch("/api/changeStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskID),
    });
    if (!response.ok) {
      const error = await response.json();
      console.log(error);
    }
    const resp = await response.json();
    const status = resp.message;
    console.log(status);
  };

  return (
    <div>
      <div className={styles.container}>
        Welcome to the Decentralized To-Do Application
      </div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Add task here ..."
            onChange={handleChange}
            value={task}
          />
          <input type="submit" value="Add Task" />
        </form>
      </div>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Task Description</th>
              <th>Task Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{task.desc}</td>
                <td>{task.status === 0 ? "Pending" : "Finished"}</td>
                <td>
                  {task.status === 0 ? (
                    <button
                      className={styles.button}
                      onClick={() => changeTaskStatus(index)}
                    >
                      Click me
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
