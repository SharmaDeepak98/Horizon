import Header from "@/components/Header";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/user.actions";
import { get } from "http";


const Home = async() => {

  const loggedInUser = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={loggedInUser?.name.split(" ")[0] || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={9889}
          />
        </header>
USER TRANSACTION
      </div>
    <RightSideBar 
     user={loggedInUser}
     transactions={[]}
     banks={[{currentBalance:123},{currentBalance:325}]}
     />
    </section>
  );
};
export default Home;
