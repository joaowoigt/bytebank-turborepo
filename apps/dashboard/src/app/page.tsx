"use client";
import DashboardCenterArea from "./dashboard/centerArea/DashboardCenterArea";
import DashboardHeader from "./dashboard/DashboardHeader";
import DasboardSideMenu from "./dashboard/DashboardSideMenu";
import DashboardExtractArea from "./dashboard/extractArea/DashboardExtract";
import NewTransactionArea from "./dashboard/NewTransactionArea/NewTransactionArea";
import http from "../http";
import { useEffect, useState } from "react";
import { mapTransactionDBToTransactionResponse } from "./domain/mappers/transactionMappers";
import { Provider, useDispatch } from "react-redux";
import store from "../store";
import {
  setExtract,
  setTransactions,
} from "../features/transactions/transactionsSlices";
import DashboardChartArea from "./dashboard/chartArea/DashboardChartArea";
import { setBalance, setName } from "../features/balance/CenterAreaSlice";
import { TransactionDB } from "./data/TransactionDB";

export default function Page(): JSX.Element {
  const dispatch = useDispatch();
  function fetchAccount() {
    http
      .get("/account")
      .then((response) => {
        sessionStorage.setItem("accountId", response.data.result.account[0].id);
        dispatch(setName(response.data.result.cards[0].name));
      })
      .then(() => {
        const accountid = sessionStorage.getItem("accountId");
        http.get(`account/${accountid}/statement`).then((response) => {
          const mappedList = response.data.result.transactions.map(
            (item: TransactionDB) => {
              return mapTransactionDBToTransactionResponse(item);
            }
          );
          const balance = response.data.result.transactions.reduce(
            (acc: number, item: TransactionDB) => {
              return acc + item.value;
            },
            0
          );
          dispatch(setBalance(balance));
          dispatch(setTransactions(mappedList));
          dispatch(setExtract());
        });
      });
  }

  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <Provider store={store}>
      <div className="bg-secondaryVariant w-auto h-auto flex flex-col mobile:w-full">
        <DashboardHeader></DashboardHeader>
        <div className="flex flex-row  mt-big w-auto justify-center mobile:flex-col">
          <DasboardSideMenu></DasboardSideMenu>
          <div className=" w-[100%] max-w-[680px] flex flex-col mobile:w-full">
            <DashboardCenterArea></DashboardCenterArea>
            <NewTransactionArea></NewTransactionArea>
            <DashboardChartArea></DashboardChartArea>
          </div>
          <DashboardExtractArea></DashboardExtractArea>
        </div>
      </div>
    </Provider>
  );
}
