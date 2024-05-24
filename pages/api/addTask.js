import { ethers } from "ethers";
import * as Constants from "../../Utils/congif";

async function handler(req, res) {
  try {
    const task = req.body;
    const provider = new ethers.providers.JsonRpcProvider(Constants.API_URL);
    const signer = new ethers.Wallet(Constants.PRIVATE_KEY, provider);
    const contract = new ethers.Contract(
      Constants.CONTRACT_ADDRESS,
      Constants.CONTRACT_ABI,
      signer
    );
    const transaction = await contract.addTask(task);
    await transaction.wait();
    res.status(200).json({ message: "Task Added Successfully" });
  } catch (error) {
    console.log(error);
  }
}

export default handler;