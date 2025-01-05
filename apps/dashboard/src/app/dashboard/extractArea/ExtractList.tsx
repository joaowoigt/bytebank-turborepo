import { TransactionResponse } from "@repo/network/ExtractResponse";
import ExtractItem from "./ExtractItem";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setExtract,
} from "../../../features/transactions/transactionsSlices";
import { BackIcon, NextIcon } from "@repo/ui/icons";
import {
  selectFilteredList,
  selectCurrentPage,
  selectTotalPages,
  selectFilter,
} from "../../../selectors/TransactionSelectors";

export default function ExtractList() {
  const dispatch = useDispatch();
  const transactions: TransactionResponse[] = useSelector(selectFilteredList);
  const currentPage: number = useSelector(selectCurrentPage);
  const totalPage: number = useSelector(selectTotalPages);
  const filter: String = useSelector(selectFilter);

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
