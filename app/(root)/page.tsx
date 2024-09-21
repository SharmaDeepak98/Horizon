import Header from "@/components/Header";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { get } from "http";
import { getAccounts } from "@/lib/actions/bank.actions";
import { useRouter } from "next/navigation";

const Home = async ({searchParams:{id,page}}:SearchParamProps) => {
  const loggedInUser = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedInUser!.$id });

  if (!accounts) return;

  const accountData = accounts.data;
  const appwriteItemId = (id as string) || accountData[0].appwriteItemId;

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={loggedInUser.firstName +" | "+loggedInUser.lastName} 
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={accountData}
            totalBanks={accounts.totalBanks}
            totalCurrentBalance={accounts.totalCurrentBalance}
          />
        </header>
        USER TRANSACTION
      </div>
      <RightSideBar
        user={loggedInUser}
        transactions={accounts.transactions}
        banks={accountData.slice(0, 2)}
      />
    </section>
  );
};
export default Home;
