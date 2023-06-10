import List from "../components/List";
import Form from "../components/Form";

// const path=path.resolve(__dirname,"./assets/images/illustration-sign-up-desktop.svg")
function NewsLetter() {
  return (
    <div className="flex min-h-screen w-[100vw] justify-center items-center bg-[#36384D]">
      <div className="flex flex-col sm:flex-row-reverse justify-between w-full max-w-[848px] h-full sm:h-[560px] gap-4 rounded-br-xl rounded-bl-xl sm:rounded-xl bg-white sm:p-6">
        <div className="min-h-[250px] sm:h-auto sm:w-1/2 rounded-b-xl sm:rounded-xl bg-[url('src/assets/images/illustration-sign-up-mobile.svg')] sm:bg-[url('src/assets/images/illustration-sign-up-desktop.svg')] bg-cover bg-no-repeat bg-center"></div>
        <div className="flex flex-col gap-[24px] sm:justify-around items-center sm:w-1/2 sm:h-full p-8 font-roboto_regular ">
          <h1 className="font-roboto_bold text-5xl font-bold">Stay Updated!</h1>
          <h5 className="font-roboto_regular">
            Join 60,000+ product managers recieving monthly updates on:
          </h5>

          <List />

          <Form />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;

// Stay updated! Join 60,000+ product managers receiving monthly updates on: Product discovery and building what matters Measuring to ensure updates are a success And much more! Email address email@company.com Subscribe to monthly newsletter Thanks for subscribing! A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription. Dismiss message
// Challenge by Frontend Mentor. Coded by Your Name Here.
