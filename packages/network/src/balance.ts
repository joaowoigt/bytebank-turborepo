import type { NextApiRequest, NextApiResponse } from "next";
import transaction, { isDebit, isCredit } from "./domain/models/Transactions";
import connectMongoDB from "./lib/connectDB";
export type BalanceData = {
  value: string;
};

export async function getBalance() {
  const balance = await getAllBalance();
  console.log("Teteste dentro da call" + balance);
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const finalText = formatter.format(balance);
  return { value: `${finalText}` };
}

async function getAllBalance() {
  await connectMongoDB();
  const extractList = await transaction.find();
  let finalBalance = 0.0;
  extractList.forEach((transaction) => {
    if (isDebit(transaction)) {
      finalBalance -= transaction.value;
    }
    if (isCredit(transaction)) {
      finalBalance += transaction.value;
    }
  });
  return finalBalance;
}
