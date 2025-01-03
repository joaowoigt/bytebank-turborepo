import { Text } from "@repo/ui/texts";
import { TransactionResponse } from "@repo/network/ExtractResponse";
import ExtractList from "./ExtractList";
import { useSelector } from "react-redux";
import { selectTransactions } from "../../../features/transactions/transactionsSlices";

export default function DashboardExtractArea(): JSX.Element {
  const transactions: TransactionResponse[] = useSelector(selectTransactions);
  return (
    <div className="h-fit bg-grey w-[280px] flex flex-col py-[37px] px-big rounded-2xl mobile:items-center mobile:mt-big mobile:w-[312px] mobile:m-big mobile:px-0">
      <Text intent="Heading" color="black" text="Extrato" style="bold"></Text>
      <ExtractList extractList={transactions}></ExtractList>
    </div>
  );
}
