import { TransactionResponse } from "@repo/network/ExtractResponse";
import ExtractItem from "./ExtractItem";
import { useSelector } from "react-redux";
import { selectFilteredList } from "../../../features/transactions/transactionsSlices";

export default function ExtractList() {
  const transactions: TransactionResponse[] = useSelector(selectFilteredList);

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
    </div>
  );
}
