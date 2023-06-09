import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
// const path=path.resolve(__dirname,"./assets/images/illustration-sign-up-desktop.svg")
function App() {
  const [page, setPage] = useState("newsletter");
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex min-h-screen w-[100vw] justify-center items-center bg-[#36384D]">
      <div className="flex flex-col sm:flex-row-reverse justify-between w-full max-w-[848px] sm:h-[560px] gap-4  rounded-br-xl rounded-bl-xl sm:rounded-xl bg-white sm:p-6">
        <div className="aspect-1 sm:w-2/5 rounded-b-xl sm:rounded-xl bg-[url('./assets/images/illustration-sign-up-desktop.svg')] bg-cover bg-no-repeat bg-center"></div>
        <div className="flex flex-col gap-[24px] sm:justify-around items-center sm:w-3/5 sm:h-full p-8 font-roboto_regular ">
          <h1 className="font-roboto_bold text-5xl font-bold">Stay Updated!</h1>
          <h5 className="font-roboto_regular">
            Join 60,000+ product managers recieving monthly updates on:
          </h5>

          <ul className="flex flex-col w-full">
            <li className="mt-2 list-image-[url('src/assets/images/icon-list.svg')]">
              Product discovery and building what matters
            </li>
            <li className="mt-2 list-image-[url('src/assets/images/icon-list.svg')]">
              Measuring to ensure updates are a success
            </li>
            <li className="mt-2 list-image-[url('src/assets/images/icon-list.svg')]">
              And much more!
            </li>
          </ul>
          <form
            onSubmit={handleSubmit(() => setPage("success"))}
            className="w-full">
            <label htmlFor="email" className="text-sm">
              Email address <br />
            </label>
            <input {...register("email")}
              className="w-full max-w-md rounded-lg mt-2 mb-4"
              placeholder="email@company.com"
            />
            <input 
              type="submit"
              value="Subscribe to monthly newsletter"
              className="w-full max-w-md rounded-lg bg-black text-white text-sm p-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

// Stay updated! Join 60,000+ product managers receiving monthly updates on: Product discovery and building what matters Measuring to ensure updates are a success And much more! Email address email@company.com Subscribe to monthly newsletter Thanks for subscribing! A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription. Dismiss message
// Challenge by Frontend Mentor. Coded by Your Name Here.
