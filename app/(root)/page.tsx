import Header from "@/components/Header";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { redirect } from "next/navigation";
import RecentTracsactions from "@/components/RecentTracsactions";

const Home = async ({searchParams:{id,page}}:SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedInUser = await getLoggedInUser();
  if (!loggedInUser) {
    return null
  }
  const accounts = await getAccounts({ userId: loggedInUser?.$id });

  if (!accounts) return;

  const accountData = accounts.data;
  const appwriteItemId = (id as string) || accountData[0].appwriteItemId;
  const account = await getAccount({ appwriteItemId });

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={loggedInUser.firstName +" "+ loggedInUser.lastName} 
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={accountData}
            totalBanks={accounts.totalBanks}
            totalCurrentBalance={accounts.totalCurrentBalance}
          />
        </header>
        <RecentTracsactions
        accounts={accountData}
        transactions={account?.transactions}
        appwriteItemId={appwriteItemId}
        page={currentPage}
        />



      </div>
      <RightSideBar
        user={loggedInUser}
        transactions={account.transactions}
        banks={accountData.slice(0, 2)}
      />
    </section>
  );
};
export default Home;
