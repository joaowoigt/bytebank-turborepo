import http from "./http";
import { DashboardRepository } from "./DashboardRepository";
import { Transaction } from "../app/domain/models/Transaction";
import { TransactionDB } from "../app/data/TransactionDB";
import { mapTransactionDBToTransactionResponse } from "../app/domain/mappers/transactionMappers";

export class DashboardRepositoryImpl implements DashboardRepository {
  async fetchAccount(): Promise<string> {
    const response = await http.get("/account");
    sessionStorage.setItem("accountId", response.data.result.account[0].id);
    return response.data.result.cards[0].name;
  }

  async fetchStatement(accountId: string): Promise<Transaction[]> {
    const response = await http.get(`account/${accountId}/statement`);
    return response.data.result.transactions.map((item: TransactionDB) => {
      return mapTransactionDBToTransactionResponse(item);
    });
  }
}
