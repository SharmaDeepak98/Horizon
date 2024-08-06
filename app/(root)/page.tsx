import Header from "@/components/Header";
import TotalBalanceBox from "@/components/TotalBalanceBox";


const Home = () => {
  const loggedIn = { firstName: "Deepak" };

  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={9889}
          />
        </div>

      </div>
    </section>
  );
};
export default Home;
