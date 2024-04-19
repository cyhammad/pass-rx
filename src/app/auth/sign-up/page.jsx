import SignUpForm from "@/components/forms/SignUpForm";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex h-screen">
      <div className="hidden h-full w-1/2 items-center bg-[url('/bg.svg')] bg-cover bg-center tracking-[2%] text-white sm:flex lg:w-2/3">
        <div className="flex flex-col gap-y-8 px-8 md:px-12 lg:px-16">
          <h1 className="text-[30px] lg:text-[45px]">
            Discover, Learn, <span className="text-primary">Succeed</span>!{" "}
            <br /> Your Gateway to Knowledge.
          </h1>
          <p className="lg:text-[18px]">
            Our system is designed from the ground up to recognize your patterns
            and learn using AI. Not only you get smarter, I get smarter to.
          </p>
          <span className="text-[18px] lg:text-[22px]">Together.</span>
          <span className="text-[18px] lg:text-[22px]">UNI.</span>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center bg-white px-8 py-10 sm:w-[480px] md:px-12 lg:w-1/3 lg:px-16">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-xl tracking-[2%] text-dark lg:text-2xl lg:leading-[38.4px]">
            Get Started absolutely free for 7-days Trial
          </h2>
          <h3 className="text-xs leading-[22.4px] lg:text-sm">
            Already have an account?&nbsp;
            <Link href="/auth/sign-in" className="text-primary">
              Login
            </Link>
          </h3>
          <SignUpForm />
        </div>
        <div className="flex justify-center gap-5 text-gray lg:mt-8">
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

export default SignUpPage;
