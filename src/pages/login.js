import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidate } from "../../utils/validate";
import useLogin from "../hooks/useLogin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidate),
  });

  const { onSubmit } = useLogin();

  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    router.push("/");
  }
  return (
    !session && (
      <>
        <Head>
          <title>Books | Login</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section>
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
                <div className="w-full px-10 py-3">
                  <div>
                    <div className="mt-3 text-left sm:mt-5">
                      <div className="inline-flex items-center w-full">
                        <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-3xl">
                          Log In
                        </h3>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-6 space-y-2">
                      <div className="mt-3">
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="block w-full px-5 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          placeholder="Enter your email"
                          {...register("email")}
                        />
                        <p className="text-red-600 text-xs">
                          {errors.email?.message}
                        </p>
                      </div>
                      <div className="mt-3">
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="block w-full px-5 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          placeholder="Enter your password"
                          {...register("password")}
                        />
                        <p className="text-red-600 text-xs">
                          {errors.password?.message}
                        </p>
                      </div>
                      <div className="flex flex-col mt-8 lg:space-y-2">
                        <button
                          type="submit"
                          className="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-indigo-700 rounded-xl hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 mt-4"
                        >
                          Log In
                        </button>
                        <Link href="/signup">
                          <span
                            type="button"
                            className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-slate-900 sm:text-sm"
                          >
                            New user ? Signup
                          </span>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="order-first hidden w-full lg:block bg-cover h-[420px]">
                  <img
                    className="object-cover h-full bg-cover rounded-l-lg"
                    src="https://img.freepik.com/premium-photo/books-library-illustration-generative-aixa_115919-5871.jpg?w=2000"
                    alt="books"
                    height="420px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  );
};

export default login;
