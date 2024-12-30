"use client";
import DashboardCenterArea from "./dashboard/centerArea/DashboardCenterArea";
import DashboardHeader from "./dashboard/DashboardHeader";
import DasboardSideMenu from "./dashboard/DashboardSideMenu";
import DashboardExtractArea from "./dashboard/extractArea/DashboardExtract";
import NewTransactionArea from "./dashboard/NewTransactionArea/NewTransactionArea";
import { TransactionResponse } from "@repo/network/ExtractResponse";
import http from "../http";
import { useEffect, useState } from "react";
import { mapTransactionDBToTransactionResponse } from "./domain/mappers/transactionMappers";

export default function Page(): JSX.Element {
  const [extractList, setExtractList] = useState<TransactionResponse[]>([]);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [name, setName] = useState("");
  function fetchAccount() {
    http
      .get("/account")
      .then((response) => {
        sessionStorage.setItem("accountId", response.data.result.account[0].id);
        setName(response.data.result.cards[0].name);
        console.log(response);
      })
      .then(() => {
        const accountid = sessionStorage.getItem("accountId");
        http.get(`account/${accountid}/statement`).then((response) => {
          console.log(response.data.result.transactions);
          const mappedList = response.data.result.transactions.map((item) => {
            return mapTransactionDBToTransactionResponse(item);
          });
          const balance = response.data.result.transactions.reduce(
            (acc: number, item) => {
              return acc + item.value;
            },
            0,
          );
          setCurrentBalance(balance);
          setExtractList(mappedList);
        });
      });
  }

  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className="bg-secondaryVariant w-auto h-auto flex flex-col mobile:w-full">
      <DashboardHeader></DashboardHeader>
      <div className="flex flex-row  mt-big w-auto justify-center mobile:flex-col">
        <DasboardSideMenu></DasboardSideMenu>
        <div className=" w-[100%] max-w-[680px] flex flex-col mobile:w-full">
          <DashboardCenterArea
            balance={currentBalance}
            name={name}
          ></DashboardCenterArea>
          <NewTransactionArea></NewTransactionArea>
        </div>
        <DashboardExtractArea extractList={extractList}></DashboardExtractArea>
      </div>
    </div>
  );
}
