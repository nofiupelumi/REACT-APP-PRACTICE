import { FunctionComponent } from "react";

const SignUpPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-surface-primary overflow-hidden flex flex-col items-center justify-start pt-[42px] px-0 pb-[129px] box-border gap-[96px] tracking-[normal] mq450:gap-[24px] mq1025:gap-[48px]">
      <header className="self-stretch bg-faint-blue flex flex-row items-center justify-between py-px pr-[17px] pl-[3px] box-border gap-[20px] top-[0] z-[99] sticky max-w-full text-left text-5xl text-black font-inter">
        <div className="h-[94px] w-[1512px] relative bg-faint-blue hidden max-w-full" />
        <div className="flex flex-row items-center justify-start py-0 pr-10 pl-0 gap-[4px] text-[32px]">
          <div className="flex flex-row items-start justify-start p-2.5 z-[1]">
            <img
              className="h-[72px] w-[72px] relative rounded-[50%] object-cover"
              loading="eager"
              alt=""
              src="/ellipse-1@2x.png"
            />
          </div>
          <h1 className="m-0 h-[39px] relative text-inherit font-extrabold font-inherit inline-block whitespace-nowrap z-[1]">
            Site Name
          </h1>
        </div>
        <div className="w-[574px] flex flex-row items-start justify-start py-5 px-0 box-border gap-[41px] max-w-full mq750:gap-[20px] mq1125:hidden">
          <h3 className="m-0 h-[29px] relative text-inherit font-normal font-inherit inline-block z-[1]">
            Home
          </h3>
          <h3 className="m-0 relative text-inherit font-normal font-inherit z-[1]">
            Blogs
          </h3>
          <h3 className="m-0 h-[29px] relative text-inherit font-normal font-inherit inline-block whitespace-nowrap z-[1]">
            About Us
          </h3>
          <h3 className="m-0 h-[29px] relative text-inherit font-normal font-inherit inline-block whitespace-nowrap z-[1]">
            Contact Us
          </h3>
          <h3 className="m-0 relative text-inherit font-normal font-inherit z-[1]">
            FAQs
          </h3>
        </div>
        <div className="w-[286px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border text-gainsboro mq750:w-0">
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq750:hidden">
            <input
              className="w-[69px] [border:none] [outline:none] font-inter text-5xl bg-[transparent] h-[29px] relative text-black text-left inline-block whitespace-nowrap z-[1]"
              placeholder="Log in"
              type="text"
            />
            <div className="bg-darkslateblue flex flex-row items-center justify-center pt-1 pb-[3px] pr-1.5 pl-[11px] whitespace-nowrap z-[1]">
              <div className="h-[29px] relative font-extrabold inline-block">{`Get started `}</div>
            </div>
          </div>
        </div>
      </header>
      <form className="m-0 w-[909px] flex flex-col items-end justify-start py-0 px-5 box-border gap-[53px] max-w-full mq450:gap-[26px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[21px] min-h-[44px] max-w-full">
          <div className="flex-1 box-border flex flex-row items-center justify-start p-2.5 min-w-[75px] max-w-full border-[1px] border-solid border-gray-200">
            <input
              className="w-[75px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-black text-left inline-block"
              placeholder="Full Name"
              type="text"
            />
          </div>
          <div className="w-[313px] box-border flex flex-row items-center justify-between pt-2 pb-[7px] pr-7 pl-2.5 gap-[20px] border-[1px] border-solid border-gray-200">
            <input
              className="w-[30px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-black text-left inline-block"
              placeholder="Age"
              type="text"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/materialsymbolslightarrowdropdowncirclerounded.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
          <div className="bg-surface-primary flex flex-row items-center justify-start py-2.5 pr-[18px] pl-2.5 gap-[30px] border-[1px] border-solid border-gray-200">
            <div className="relative text-base font-inter text-black text-left">
              Sex
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/materialsymbolslightarrowdropdowncirclerounded-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[22px] pl-0">
            <div className="bg-surface-primary flex flex-row items-center justify-start py-2.5 pr-1 pl-[9px] gap-[9px] border-[1px] border-solid border-gray-200">
              <div className="relative text-base font-inter text-black text-left">
                Hobbies
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/materialsymbolslightarrowdropdowncirclerounded-1.svg"
              />
            </div>
          </div>
          <div className="w-[313px] bg-surface-primary box-border flex flex-row items-center justify-start py-2.5 pr-[42px] pl-2.5 gap-[80px] border-[1px] border-solid border-gray-200 mq450:gap-[40px] mq450:pr-5 mq450:box-border">
            <input
              className="w-[calc(100%_-_76px)] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] flex-1 relative text-black text-left inline-block min-w-[94px]"
              placeholder="Mental health issues"
              type="text"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/materialsymbolslightarrowdropdowncirclerounded-1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full">
          <div className="flex-1 bg-surface-primary box-border flex flex-row items-center justify-start p-2.5 max-w-full border-[1px] border-solid border-gray-200">
            <input
              className="w-[41px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-black text-left inline-block"
              placeholder="Email"
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full">
          <div className="flex-1 box-border flex flex-row items-center justify-start p-2.5 max-w-full border-[1px] border-solid border-gray-200">
            <input
              className="w-[74px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-black text-left inline-block"
              placeholder="Password "
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-px gap-[29px]">
          <div className="self-stretch flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-gray-200">
            <input
              className="w-[150px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-black text-left inline-block"
              placeholder="Re -Enter password"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[11px]">
            <button className="cursor-pointer [border:none] py-2.5 pr-5 pl-[21px] bg-faint-blue self-stretch flex flex-row items-center justify-center hover:bg-lightsteelblue">
              <div className="relative text-base font-black font-inter text-darkslateblue text-left">
                Sign in
              </div>
            </button>
            <div className="w-[206px] h-[115px] flex flex-row items-start justify-start p-2.5 box-border relative">
              <div className="h-full my-0 mx-[!important] absolute top-[0px] left-[0px] flex flex-col items-center justify-center gap-[17px] w-full">
                <div className="flex flex-row items-center justify-center py-2.5 px-2">
                  <div className="relative text-base font-inter text-black text-left">
                    Sign up with
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-2.5 gap-[10px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/flatcoloriconsgoogle.svg"
                  />
                  <div className="relative text-base font-inter text-gray-100 text-left">{`Sign up with Google `}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
