import { ProfileIcon } from "@repo/ui/icons";
import { Text } from "@repo/ui/texts";
import HamburguerMenuDashboard from "./HamburguerMenuDashboard";
import { useSelector } from "react-redux";
import { selectName } from "../../selectors/CenterAreaSelectors";

export default function DashboardHeader() {
  const name = useSelector(selectName);
  return (
    <header className="bg-primary w-auto h-[96px] flex flex-row justify-end items-center pr-[10%] mobile:justify-between mobile:w-full mobile:px-medium">
      <div className="mobile:hidden">
        <Text intent="Heading" color="white" text={name}></Text>
      </div>
      <div className="hidden mobile:flex">
        <HamburguerMenuDashboard></HamburguerMenuDashboard>
      </div>
      <ProfileIcon></ProfileIcon>
    </header>
  );
}
