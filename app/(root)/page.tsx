import Header from "@/components/Header";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";


const Home = () => {

  const loggedIn = {
  
    $id:"1",
    firstName:"Deepak",
    lastName:"Sharma",
  email: "example@abc.com",
  userId: "123",
  dwollaCustomerUrl: "www.example.com",
  dwollaCustomerId: "abcd",
  address1: "addressOfUser",
  city: "myCity",
  state: "myState",
  postalCode: "123123",
  dateOfBirth: "12-12-2001",
  ssn: "12"
  }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
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
        </header>
USER TRANSACTION
      </div>
    <RightSideBar 
     user={loggedIn}
     transactions={[]}
     banks={[{currentBalance:123},{currentBalance:325}]}
     />
    </section>
  );
};
export default Home;
