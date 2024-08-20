import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/user.actions";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const loggedIn = {
  //   $id:"1",
  //   firstName:"Deepak",
  //   lastName:"Sharma",
  // email: "example@abc.com",
  // userId: "123",
  // dwollaCustomerUrl: "www.example.com",
  // dwollaCustomerId: "abcd",
  // address1: "addressOfUser",
  // city: "myCity",
  // state: "myState",
  // postalCode: "123123",
  // dateOfBirth: "12-12-2001",
  // ssn: "12"
  // }

  const loggedIn = await getLoggedInUser();

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>

     <div className="flex flex-col size-full">

<div className="root-layout">
<Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>

<div>
<MobileNav user={loggedIn} />
</div>
</div>

        {children}
      </div> 
    </main>
  );
}