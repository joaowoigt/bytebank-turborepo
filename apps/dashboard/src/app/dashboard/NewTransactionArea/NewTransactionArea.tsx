import { Button } from "@repo/ui/buttons";
import { Dropdown, DropDownItem } from "@repo/ui/dropdown";
import { Text } from "@repo/ui/texts";
import { TransactionType } from "@repo/network/TransactionType";
import { CreateTransactionRequest } from "@repo/network/add-transaction";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import http from "../../../http";

export default function NewTransactionArea() {
  const [value, setValue] = useState<number>(0.0);
  const [type, setType] = useState<number>(0);

  const onSelectedType = (type: number) => {
    setType(type);
    console.log(type);
  };

  const onChange = (text: number) => {
    setValue(text);
    console.log(value);
  };

  function addTransaction() {
    const transactionRequest = {
      value: value,
      type: type,
      accountId: sessionStorage.getItem("accountId"),
    };
    http.post("/account/transaction", transactionRequest).then((response) => {
      console.log(response);
      window.location.reload();
    });
  }

  return (
    <div className="bg-grayVariant h-[420px] rounded-2xl flex flex-col  mx-big p-big mt-big mobile:items-center">
      <Text intent="Heading" color="white" text="Nova transação"></Text>
      <div className="my-extraBig">
        <Dropdown
          onSelect={(item: TransactionType) => onSelectedType(item)}
        ></Dropdown>
      </div>
      <Text intent="Regular" color="white" text="Valor"></Text>
      <CurrencyInput
        decimalsLimit={2}
        onValueChange={(value, name, values) =>
          onChange(values?.float as number)
        }
        prefix="R$"
        className="outline outline-1 outline-primary  mb-big mt-medium bg-white rounded-md px-small w-[250px]  py-small text-black text-start flex flex-row hover:cursor-text"
      />
      <div className="w-[250px] mobile:w-full mobile:items-center mobile:flex mobile:flex-col">
        <Button
          intent="primary"
          text="Concluir transação"
          onClick={(event) => {
            addTransaction();
          }}
        ></Button>
      </div>
    </div>
  );
}
