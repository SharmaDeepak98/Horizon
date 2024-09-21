import { logout } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
const router=useRouter();
    const handleLogout = async() => {
// const loggedout = await logout();
// if (loggedout) {
//     router.push("/signin");

    }
    
  return (
    <div className="footer">
      <div
        className={type === "desktop" ? "footer_name" : "footer_name-mobile "}
      >
        <p className="font-bold text-xl text-gray-700">
          {user?.firstName[0].toUpperCase()}
        </p>
      </div>

      <div
        className={type === "desktop" ? "footer_email" : "footer_email-mobile"}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user.firstName}
        </h1>

        <h1 className="text-14 truncate font-normal text-gray-600">
          {user.email}
        </h1>
      </div>
      <div className="footer_image">
        <Image src="/icons/logout.svg" fill alt="logout" onClick={handleLogout}/>
      </div>
    </div>
  );
};
export default Footer;
