import { Text } from "@repo/ui/texts";
import ExtractList from "./ExtractList";
import { FilterDropdown, FilterTypes } from "@repo/ui/filterdropdown";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../features/filter/filtersSlices";
import { selectTransactions } from "../../../features/transactions/transactionsSlices";
import { TransactionResponse } from "@repo/network/ExtractResponse";
import { setExtract } from "../../../features/filteredList/filteredListSlices";

export default function DashboardExtractArea(): JSX.Element {
  const transactions: TransactionResponse[] = useSelector(selectTransactions);
  const dispatch = useDispatch();
  const handleFilter = (item: FilterTypes) => {
    dispatch(setFilter(item));
    if (item === "All") {
      dispatch(setExtract(transactions));
    } else {
      transactions.forEach((transaction) => console.log(transaction.type));
      dispatch(
        setExtract(
          transactions.filter((transaction) => transaction.type === item)
        )
      );
    }
  };

  return (
    <div className="h-fit bg-grey w-[280px] flex flex-col py-[37px] px-big rounded-2xl mobile:items-center mobile:mt-big mobile:w-[312px] mobile:m-big mobile:px-0">
      <Text intent="Heading" color="black" text="Extrato" style="bold"></Text>
      <FilterDropdown
        onSelect={(item: FilterTypes) => handleFilter(item)}
      ></FilterDropdown>
      <ExtractList></ExtractList>
    </div>
  );
}
