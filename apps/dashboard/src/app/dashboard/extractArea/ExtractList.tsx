import { TransactionResponse } from "@repo/network/ExtractResponse";
import ExtractItem from "./ExtractItem";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setExtract,
} from "../../../features/transactions/transactionsSlices";
import { BackIcon, NextIcon } from "@repo/ui/icons";

export default function ExtractList() {
  const dispatch = useDispatch();
  const transactions: TransactionResponse[] = useSelector(
    (state) => state.transactions.filteredList
  );
  const currentPage: number = useSelector(
    (state) => state.transactions.pagination.currentPage
  );
  const totalPage: number = useSelector(
    (state) => state.transactions.pagination.totalPages
  );
  const filter: String = useSelector((state) => state.transactions.filter);

  const handleBackAction = () => {
    dispatch(setCurrentPage(currentPage - 1));
    dispatch(setExtract());
  };

  const handleNextAction = () => {
    console.log("No clique");
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(setExtract());
  };

  return (
    <div>
      {transactions.map((item) => (
        <ExtractItem
          key={item.id}
          _id={item.id}
          month={item.month}
          type={item.type}
          fullDate={item.fullDate}
          value={item.value.toString()}
        ></ExtractItem>
      ))}
      {filter === "All" ? (
        <div className="flex flex-row mt-big justify-between">
          {currentPage <= 1 ? (
            <div></div>
          ) : (
            <BackIcon onClick={() => handleBackAction()}></BackIcon>
          )}

          {currentPage == totalPage ? (
            <div></div>
          ) : (
            <NextIcon onClick={() => handleNextAction()}></NextIcon>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
