export const API_URL = "https://eth-sepolia.g.alchemy.com/v2/DWfLUOLW0okSzkDi06KIplylU7y7Zm1B";
export const PRIVATE_KEY = "54c621cce6e622a643729f420d0278d83c05a548725fdfbad99955a17403c96a";
export const CONTRACT_ADDRESS = "0xcA17ED976de4D47a0599747dD0596Ad990175700";
export const CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      }
    ],
    "name": "addTask",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllTasks",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "desc",
            "type": "string"
          },
          {
            "internalType": "enum TaskToDo.TaskStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct TaskToDo.Task[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getTask",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "enum TaskToDo.TaskStatus",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "markAsFinished",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tasks",
    "outputs": [
      {
        "internalType": "string",
        "name": "desc",
        "type": "string"
      },
      {
        "internalType": "enum TaskToDo.TaskStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]