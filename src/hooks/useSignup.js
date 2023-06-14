import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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

  return {
    onSubmit,
  };
};

export default useSignup;
