import SignInForm from "@/components/forms/SignInForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex h-screen"> {/*Parent Div*/}
      <div className="h-full w-3/4 bg-[url('/bg.svg')] bg-cover bg-center"> {/*Image Div*/}
      </div>
      <div className="flex w-1/4 flex-col justify-center bg-white px-8"> {/*Form Div*/}
        <div className="">
          <h2 className="text-xl font-medium tracking-wide">
            Sign in to Unimetrics
          </h2>
          <h3 className="py-5 text-sm">
            New user? <span className="text-primary">Create an account</span>
          </h3>
          <SignInForm />
        </div>
        <div className="text-gray mt-8 flex justify-center gap-5">
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
