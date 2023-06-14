import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { registerValidate } from "../../utils/validate";

const useSignup = () => {
  const router = useRouter();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await axios.post("/api/auth/signup", data);
      console.log("result", result);
      if (result.status === 200) {
        router.push("http://localhost:3000/login");
        toast.success(result.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerValidate) });

  return {
    onSubmit,
    session,
    router,
    register,
    handleSubmit,
    errors,
  };
};

export default useSignup;
