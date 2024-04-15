import Image from "next/image";

const SignInForm = () => {
  return (
    <div className="flex flex-col gap-5">
      <input
        className="w-full rounded-md border border-slate-100 px-4 py-2 text-sm"
        type="text"
        placeholder="Email"
      />
     
<div className="relative">
      <input
        className="w-full rounded-md border border-slate-100 px-4 py-2 text-sm" 
        type="password"
        placeholder="Password"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
        <Image 
          src="/password.svg"
          alt="Password Icon"
          width={25}
          height={20}
        />
      </div>
    </div>

      <h3 className="flex justify-end text-sm ">Forgot Password?</h3>
      <button className="rounded-md bg-primary py-3 text-white">Login</button>
      <div className="flex items-center ">
        <div className="border-slate-200 w-full border-t"></div>
        <div className="text-gray mx-3 text-sm font-medium">OR</div>
        <div className="border-slate-200 w-full border-t"></div>
      </div>
    </div>
  );
};

export default SignInForm;
