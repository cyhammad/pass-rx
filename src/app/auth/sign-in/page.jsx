import SignInForm from "@/components/forms/SignInForm";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className="hidden h-full w-full bg-[url('/bg.svg')] bg-cover bg-center sm:block"></div>
      <div className="flex w-full flex-col justify-center bg-white px-8 sm:w-[480px] md:min-w-[480px]">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-2xl text-dark leading-[38.4px] tracking-[2%]">
            Sign in to Unimetrics
          </h2>
          <h3 className="text-sm leading-[22.4px]">
            New user?{" "}
            <Link href="/auth/sign-up" className="text-primary">
              Create an account
            </Link>
          </h3>
          <SignInForm />
        </div>
        <div className="mt-8 flex justify-center gap-5 text-gray">
          <div className="flex flex-col items-center">
            <Image src="/appleIcon.svg" width={40} height={40} />
            <p className="mt-2 text-sm">Apple</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/googleIcon.svg" width={40} height={40} />
            <p className="mt-2 text-sm">Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
