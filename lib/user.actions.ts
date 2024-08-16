"use server";

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "./appwrite";
import { ID, Query } from "node-appwrite";
import { parseStringify } from "./utils";

// export const getUserInfo = async ({userId}: {userId: string}) => {
//     try {
//         const { database } = await createAdminClient();
//         const user=await database.listDocuments(
//             process.env.APPWRITE_Database_ID,
//             process.env.APPWRITE_COLLECTION_ID,
//             [Query.equal('userId', [userId])]
//         )
//       return parseStringify(user.documents[0]);
        
//     } catch (error) {
//         console.log(error)
        
//     }
// }

export const SignIn = async({
  email,
  password,
}: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const session= await account.createEmailPasswordSession(email, password);

//     cookies().set("appwrite-session", session.secret, {
// path: "/",
// httpOnly: true,
// sameSite: "strict",
// secure: true,
//     }
    
return parseStringify(session)

  
  } catch (error) {
    console.log("Error",error);
  }
};

export const SignUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
return parseStringify(newUserAccount)
  } catch (error) {
    console.log(error);
  }
};

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }

}

export async function logout() {
  try {
    const { account } = await createSessionClient();
    cookies().delete("appwrite-session");
    await account.deleteSession("current");
}
    catch (error) {
        console.log(error);
    }

  
}