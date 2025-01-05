import { TransactionResponse } from "@repo/network/ExtractResponse";
import { TransactionState } from "../features/transactions/transactionsSlices";

export function handleFilter(
  state: TransactionState,
  pageList: TransactionResponse[],
  allTransactions: TransactionResponse[]
) {
  const filter = state.filter;
  if (filter === "All") {
    return pageList;
  } else {
    return allTransactions.filter(
      (transaction: TransactionResponse) => transaction.type === filter
    );
  }
}
