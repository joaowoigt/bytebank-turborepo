import { TransactionResponse } from "@repo/network/ExtractResponse";
import ExtractItem from "./ExtractItem";

export default function ExtractList({
  extractList,
}: {
  extractList: TransactionResponse[];
}) {
  return (
    <div>
      {extractList.map((item) => (
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
