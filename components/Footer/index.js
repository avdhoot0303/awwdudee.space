import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { useRouter } from "next/router";


const Footer = ({}) => {
  const router = useRouter();

  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="tablet:m-5 text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className=" tablet:m-5 text-2xl tablet:text-6xl laptop:text-6xl laptopl:text-5xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className=" tablet:m-5 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-6xl text-bold">
              TOGETHER
            </h1>
            <Button classname = "tablet:m-15" type="primary" onClick={() => router.push("/contact")}>Schedule a call</Button>
            {/* <div className="mt-10">
              <Socials />
            </div> */}
          </div>
        </div>
      </div>
      <h1 className="tablet:m-5 text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://www.awwdudee.space">
          <a className="underline underline-offset-1">Avdhoot Patil</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;