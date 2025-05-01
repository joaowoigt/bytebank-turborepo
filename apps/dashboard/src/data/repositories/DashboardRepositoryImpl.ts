import http from "./http";
import { DashboardRepository } from "./DashboardRepository";
import { Transaction } from "../../domain/models/Transaction";
import { TransactionDB } from "../TransactionDB";
import { mapTransactionDBToTransactionResponse } from "../../domain/mappers/transactionMappers";
import { Statement } from "../../domain/models/Statement";
import { Account } from "../../domain/models/Account";

export class DashboardRepositoryImpl implements DashboardRepository {
  async fetchAccount(): Promise<Account> {
    const response = await http.get("/account");
    const id = response.data.result.account[0].id;
    const name = response.data.result.cards[0].name;
    return { id, name };
  }

  async fetchStatement(accountId: string): Promise<Statement> {
    const response = await http.get(`account/${accountId}/statement`);
    const trasactionList = response.data.result.transactions.map(
      (item: TransactionDB) => {
        return mapTransactionDBToTransactionResponse(item);
      }
    );
    const balance = response.data.result.transactions.reduce(
      (acc: number, item: TransactionDB) => {
        return acc + item.value;
      },
      0
    );
    return {
      transactions: trasactionList,
      balance: balance,
    };
  }
}
