import { Transaction } from "../app/domain/models/Transaction";

export interface DashboardRepository {
  fetchAccount(): Promise<string>;
  fetchStatement(accountId: string): Promise<Transaction[]>;
}
