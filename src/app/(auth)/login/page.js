import { handleGithubLogin } from "@/lib/action";
//import { auth, signIn } from "@/lib/auth";


const LoginPage = async() => {
 
  // const handleGithubLogin = async () => {
  //   "use server";

  //   await signIn("github"); 
  // };


  return (
    <div>
      <form action={handleGithubLogin}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg">
  Login with Github
</button>
      </form>
    </div>
  );
};

export default LoginPage;
