import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const Login = () => {
  return (
    <>
      <Head>
        <title>Automatic attendence management system</title>
      </Head>
      <Navbar loginpage={true} />
      <div class="h-screen">
        <div class="flex h-full items-center">
          <main class="w-full max-w-md mx-auto px-6">
            <div class="rounded-xl shadow-sm">
              <div class="text-center ">
                <h1 class="block text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
                  Sign in
                </h1>
                <p class="mt-2 text-sm">
                  Don't have an account yet?
                  <Link
                    class="decoration-2 hover:underline font-medium"
                    href="/signup"
                  >
                    {" "}
                    Sign up here
                  </Link>
                </p>
              </div>

              <div class="mt-5 text-black">
                <form>
                  <div class="grid gap-y-4">
                    <div>
                      <label for="email" class="block text-white  text-sm mb-2">
                        Email address
                      </label>
                      <div class="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          class="py-3 px-4 block border border-gray-600 w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                          aria-describedby="email-error"
                        />
                        <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"></div>
                      </div>
                      <p
                        class="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>

                    <div>
                      <div class="flex justify-between items-center">
                        <label
                          for="password"
                          class="block text-white text-sm mb-2"
                        >
                          Password
                        </label>
                        <Link
                          class="text-sm text-blue-400 decoration-2 hover:underline font-medium"
                          href="/forgot-password"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div class="relative">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          class="py-3 px-4 block w-full border border-gray-600 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                          aria-describedby="password-error"
                        />
                        <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"></div>
                      </div>
                      <p
                        class="hidden text-xs text-red-600 mt-2"
                        id="password-error"
                      >
                        8+ characters required
                      </p>
                    </div>

                    <button
                      type="submit"
                      class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Login;
