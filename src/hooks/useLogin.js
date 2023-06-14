import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const useLogin = () => {
  const router = useRouter();
  const onSubmit = async (data) => {
    console.log(data);
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: "http://localhost:3000/",
    });

    console.log(result);
    if (result.ok) {
      router.push(result.url);
      toast.success("Successfull Login !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Wrong credentials!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return {
    onSubmit,
  };
};

export default useLogin;
