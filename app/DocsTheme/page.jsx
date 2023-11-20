import Image from "next/image";
import Link from "next/link";
import { arrowRight, arrowText, installB, jsonFileImg } from "../assets";

function DocsTheme() {
  return (
    <div className=" mb-40">
      <div className=" flex items-center mb-4 gap-[10px] ">
        <p className=" text-primary text-xs tracking-wider font-mono uppercase">
          Documentation
        </p>
        <Image src={arrowRight} width={8} height={5} alt="Breadcrumb" />
        <p className=" font-bold text-xs tracking-wider font-mono uppercase">
          Introduction
        </p>
      </div>
      <p className="  mb-4 font-semibold text-4xl">Docs Theme</p>
      <p className="text-primary self-stretch px-1 ">
        Nextra Docs Theme is a theme that includes almost everything you need to
        build a modern documentation website. It includes a top navigation bar,
        a search bar, a pages sidebar, a TOC sidebar, and other built-in
        components. This website itself is built with the Nextra Docs Theme.
      </p>

      <div className=" mt-10 border-b border-slate-900/10">
        <p className="mb-6 font-semibold text-4xl">
          Quick Start from Template{" "}
          <span className=" text-hash text-4xl">#</span>
        </p>
      </div>

      <div className=" mt-6 mb-8">
        <p className=" text-2xl my-4 font-semibold">Deploy to Vercel</p>
        <p className=" text-primary ">
          Vercel will fork the{" "}
          <a
            target="blanck"
            className=" underline"
            href="https://nextra.site/docs/docs-theme"
          >
            Nextra Docs template(opens in a new tab)
          </a>{" "}
          and deploy the site for you. Once done, every commit in the repository
          will be deployed automatically.
        </p>
      </div>

      <div>
        <p className=" text-2xl my-6 font-semibold">Fork Template</p>
        <p className=" text-primary">
          You can also manually fork the{" "}
          <a
            target="blanck"
            className=" underline"
            href="https://github.com/shuding/nextra-docs-template"
          >
            template repository(opens in a new tab)
          </a>
        </p>
      </div>

      <div className=" mt-10 border-b border-slate-900/10">
        <p className="mb-6 font-semibold text-4xl">
          Start as New Project <span className=" text-hash text-4xl">#</span>
        </p>
      </div>

      <div className=" border-l border-slate-900/10 mt-10">
        <Image
          src={installB}
          width={14}
          height={14}
          alt="Ball"
          className=" relative left-[-7.5px]"
        />

        <div className="px-4">
          <p className="text-2xl mb-6 font-semibold">Install</p>
          <p className=" text-primary">
            To create a Nextra Docs site manually, you have to install Next.js,
            React, Nextra, and Nextra Docs Theme. In your project directory, run
            the following command to install the dependencies: npm pnpm yarn bun
          </p>
          <div className=" border-b border-slate-900/10  mt-6">
            <div className=" flex gap-4 ">
              <a className=" border-b-[2px] border-blue-600 text-blue-600 cursor-pointer pb-1 px-2 ">
                npm
              </a>
              <a className=" cursor-pointer pb-1 px-2">pnpm</a>
              <a className=" cursor-pointer pb-1 px-2">yarn</a>
              <a className=" cursor-pointer pb-1 px-2">bun</a>
            </div>
          </div>
          <div className=" mt-6 bg-listf w-full py-4 px-2 font-semibold ">
            <p className=" text-[#5ec897]">
              <span className=" text-violet-500">npm</span> i next react
              react-dom nextra nextra-theme-docs
            </p>
          </div>

          <div className=" py-2 px-2 my-6 bg-[#ffedd5] text-[#9a3412] font-semibold">
            <p>
              If you already have Next.js installed in your project, you only
              need to install nextra and nextra-theme-docs as the add-ons.
            </p>
          </div>

          <div className=" flex items-center gap-1 mb-6">
            <p>Add the following scripts in</p>
            <Image src={jsonFileImg} width={94} height={20} alt="pakage.json" />
          </div>

          <div className=" border border-slate-900/10 flex">
            <div className=" border-b border-slate-900/10 flex items-center py-3 px-2">
              <Image
                src={jsonFileImg}
                width={94}
                height={20}
                alt="pakage.json script"
              />
            </div>
          </div>

          <div className=" bg-listf py-4 px-5">
            <div className="font-semibold">
              <span className=" text-[#5ec897] ">"scripts":</span>
              {` {`} <br />
              <span className=" text-red-600 pl-3">"dev": </span>{" "}
              <span className="text-[#5ec897] ">"next",</span>
              <br />
              <span className=" text-red-600 pl-3">"build": </span>{" "}
              <span className="text-[#5ec897] ">"next build",</span>
              <br />
              <span className=" text-red-600 pl-3">"start": </span>{" "}
              <span className="text-[#5ec897] ">"next start"</span>
              <br />
              {` },`}
            </div>
          </div>
        </div>

        <div className=" flex w-full justify-around  pt-6 relative bottom-[-25px] ">
          <div className=" flex items-center  font-semibold border border-slate-900/10">
            <p className=" py-4 px-4 uppercase flex items-center gap-2">
              Page Structure
              <div className=" border-l border-slate-900/10 pl-2">
                <Image
                  src={arrowText}
                  width={13}
                  height={10}
                  alt="Page Structure"
                  className="   pt-1"
                />
              </div>
            </p>
          </div>

          <div className=" flex items-center   font-semibold border border-slate-900/10">
            <p className=" py-4 px-4 uppercase flex items-center gap-2">
              Theme Configuration
              <div className=" border-l border-slate-900/10 pl-2">
                <Image
                  src={arrowText}
                  width={13}
                  height={10}
                  alt="Theme Configuration"
                  className="   pt-1"
                />
              </div>
            </p>
          </div>

          <div className=" flex items-center   font-semibold border border-slate-900/10">
            <p className=" py-4 px-4 uppercase flex items-center gap-2">
              Built-in Components
              <div className=" border-l border-slate-900/10 pl-2">
                <Image
                  src={arrowText}
                  width={13}
                  height={10}
                  alt="Built-in Components"
                  className="   pt-1"
                />
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className=" flex  justify-end mt-40 border-b border-slate-900/10">
        <div className=" flex items-center pb-10  font-raleway uppercase text-primary">
          <p className=" text-xs">Last updated on November 20, 2023</p>
        </div>
      </div>
      <footer className=" gap-1 font-bold flex justify-end mt-10 items-center font-raleway uppercase">
        <Link href="/">next</Link>
        <div>
          <Image src={arrowText} width={13} height={10} alt="Next" />
        </div>
      </footer>
    </div>
  );
}

export default DocsTheme;
