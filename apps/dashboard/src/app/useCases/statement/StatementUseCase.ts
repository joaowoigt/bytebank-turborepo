import { Transaction } from "../../domain/models/Transaction";

export interface StatementModel {
  transactions: Transaction[];
  balance: number;
}

export interface StatementUseCase {
  execute(accountId: string): Promise<StatementModel>;
}
