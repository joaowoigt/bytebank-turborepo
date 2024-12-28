import type { NextApiRequest, NextApiResponse } from "next";
import transaction, { isDebit, isCredit } from "./domain/models/Transactions";
import connectMongoDB from "./lib/connectDB";
import { Transaction } from "mongodb";
import { mapTransactionFromDB } from "./domain/mappers/transactionMapper";
import { TransactionResponse } from "./data/responses/ExtractResponse";

export async function getExtract() {
  await connectMongoDB();
  const extract = await transaction.find();
  const mappedList: TransactionResponse[] = extract.map((item) => {
    return mapTransactionFromDB(item);
  });
  return mappedList;
}
