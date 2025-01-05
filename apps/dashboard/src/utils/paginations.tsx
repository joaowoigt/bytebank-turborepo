import { TransactionResponse } from "@repo/network/ExtractResponse";
import { TransactionState } from "../features/transactions/transactionsSlices";

export function setupPagination(
  state: TransactionState
): TransactionResponse[] {
  const transactions: TransactionResponse[] = state.transactions;
  const currentPage = state.pagination.currentPage;
  const itemsPerPage = state.pagination.itemsPerPage;
  state.pagination.totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;

  const pageList = transactions.slice(startIndex, lastIndex);

  return pageList;
}
