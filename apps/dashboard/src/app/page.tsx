"use client";
import DashboardCenterArea from "./dashboard/centerArea/DashboardCenterArea";
import DashboardHeader from "./dashboard/DashboardHeader";
import DasboardSideMenu from "./dashboard/DashboardSideMenu";
import DashboardExtractArea from "./dashboard/extractArea/DashboardExtract";
import NewTransactionArea from "./dashboard/NewTransactionArea/NewTransactionArea";

export default function Page(): JSX.Element {
  return (
    <div className="bg-secondaryVariant w-auto h-auto flex flex-col mobile:w-full">
      <DashboardHeader></DashboardHeader>
      <div className="flex flex-row  mt-big w-auto justify-center mobile:flex-col">
        <DasboardSideMenu></DasboardSideMenu>
        <div className=" w-[100%] max-w-[680px] flex flex-col mobile:w-full">
          <DashboardCenterArea></DashboardCenterArea>
          <NewTransactionArea></NewTransactionArea>
        </div>
        <DashboardExtractArea></DashboardExtractArea>
      </div>
    </div>
  );
}
