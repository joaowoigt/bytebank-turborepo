import BalanceArea from "./BalanceArea";
import WelcomeArea from "./WelcomeArea";

export default function DashboardCenterArea({
  balance,
  name,
}: {
  balance: number;
  name: string;
}) {
  return (
    <section className="bg-primary h-[420px] rounded-2xl flex flex-row  mx-big justify-between p-big mobile:flex-col mobile:items-center mobile:w-[312]">
      <WelcomeArea name={name}></WelcomeArea>
      <BalanceArea balance={balance}></BalanceArea>
    </section>
  );
}
