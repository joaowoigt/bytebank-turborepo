import { useSelector } from "react-redux";
import BalanceArea from "./BalanceArea";
import WelcomeArea from "./WelcomeArea";

export default function DashboardCenterArea() {
  const name = useSelector((state) => state.centerArea.name);
  const balance = useSelector((state) => state.centerArea.balance);
  return (
    <section className="bg-primary h-[420px] rounded-2xl flex flex-row  mx-big justify-between p-big mobile:flex-col mobile:items-center mobile:w-[312]">
      <WelcomeArea name={name}></WelcomeArea>
      <BalanceArea balance={balance}></BalanceArea>
    </section>
  );
}
