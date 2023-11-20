"use client";
import Image from "next/image";
import { useState } from "react";
import { arrowRight, docThemeImg, blogThemeImg, arrowText } from "./assets";
import Link from "next/link";

export default function Home() {
  const [showFaq, setShowFaq] = useState(false);
  const [rotateArrowFaq, setRotateArrowFaq] = useState(false);

  const toggleFaq = () => {
    setShowFaq(!showFaq);
    setRotateArrowFaq(!rotateArrowFaq);
  };

  return (
    <div className=" mb-40">
      <div className=" flex items-center mb-4 gap-[10px] ">
        <p className=" text-primary text-xs tracking-wider font-mono uppercase">
          Documentation
        </p>
        <Image src={arrowRight} width={8} height={5} alt="Breadcrumb" />
        <p className=" font-semibold text-xs tracking-wider font-mono uppercase">
          Introduction
        </p>
      </div>

      <div className="">
        <p className="  mb-4  font-semibold text-4xl">Introduction</p>
        <p className="  text-primary">
          Nextra is a framework on top of Next.js, that lets you build content
          focused websites. It has all the great features from Next.js, plus
          extra power to create Markdown-based content with ease.
        </p>
      </div>

      <div className=" mt-10 border-b border-slate-900/10">
        <p className="mb-6 font-semibold text-4xl">
          Quick Start <span className=" text-hash text-4xl">#</span>
        </p>
      </div>
      <div className="my-6  ">
        <p className=" pb-2 text-primary ">
          To start using QOVES, you need to select a theme first:
        </p>
      </div>

      <div className=" flex gap-4 ">
        <a
          target="blanck"
          href="https://nextra.site/docs/docs-theme/start"
          className=" flex flex-col border border-slate-900/10 w-1/2"
        >
          <div className="w-full flex justify-center py-10">
            <Image src={docThemeImg} width={100} height={100} alt="Doc Theme" />
          </div>

          <div className=" flex items-center  font-semibold border-t border-slate-900/10">
            <p className=" py-4 px-2 flex items-center gap-2">
              Documentation theme
              <div>
                <Image
                  src={arrowText}
                  width={13}
                  height={10}
                  alt="Next"
                  className="pt-1"
                />
              </div>
            </p>
          </div>
        </a>

        <a
          target="blanck"
          href="https://nextra.site/docs/blog-theme/start"
          className=" flex flex-col border border-slate-900/10 w-1/2"
        >
          <div className="w-full flex justify-center py-[43px]">
            <Image
              src={blogThemeImg}
              width={100}
              height={100}
              alt="Blog Theme"
            />
          </div>
          <div className=" flex items-center  font-semibold border-t border-slate-900/10">
            <p className=" py-4 px-2 flex items-center gap-2">
              Blog theme
              <div>
                <Image
                  src={arrowText}
                  width={13}
                  height={10}
                  alt="Next"
                  className="pt-1"
                />
              </div>
            </p>
          </div>
        </a>
      </div>

      <div className=" mt-10 font-semibold border-b border-slate-900/10">
        <p className="mb-6 font-semibold text-4xl">
          QOVES FAQ <span className=" text-hash text-4xl">#</span>
        </p>
      </div>
      <div className="my-6  ">
        <p className=" pb-2 text-primary ">
          The QOVES FAQ is a collection of useful questions and answers about
          the project. If you have a question that isn't answered here, please{" "}
          <a
            target="blanck"
            className=" text-blue-500 underline"
            href="https://github.com/shuding/nextra/discussions"
          >
            open a discussion
          </a>
        </p>
      </div>

      <div className="  flex flex-col  border border-slate-900/10 px-[8px] ">
        <a
          className="flex w-full items-center cursor-pointer py-1"
          onClick={toggleFaq}
        >
          <div
            className={` p-1 hover:bg-listf  ${
              rotateArrowFaq ? "rotate-90" : ""
            }`}
          >
            <Image src={arrowRight} width={8} height={5} alt="Faq" />
          </div>
          <p className="font-semibold text-xl ml-1">Can I use X with Nextra?</p>
        </a>

        <div className={` overflow-hidden ${showFaq ? "h-auto mt-2" : "h-0"}`}>
          <p className="text-primary pl-1">
            The answer is “yes” for most things. Since Nextra is just a Next.js
            plugin, almost all the things that can be done with React can be
            done with Nextra. Here are some examples and guides:
          </p>
          <ul className="flex flex-col gap-4 pl-6 my-6">
            <li>
              <a
                href="https://nextra.site/docs/guide/advanced/tailwind-css"
                target="blanck"
                className=" text-blue-500 underline"
              >
                Use Tailwind CSS
              </a>
            </li>
            <li>
              <a
                href="https://nextra.site/docs/guide/custom-css"
                target="blanck"
                className=" text-blue-500 underline"
              >
                Use custom CSS and Sass
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/docs/pages/building-your-application/optimizing/fonts"
                target="blanck"
                className=" text-blue-500 underline"
              >
                Use custom fonts
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border border-slate-900/10 px-[8px]">
        <a className="flex w-full items-center cursor-pointer py-1">
          <div className="p-1 hover:bg-listf">
            <Image src={arrowRight} width={8} height={5} alt="Faq" />
          </div>
          <p className="font-semibold text-xl ml-1">Can I use X with Nextra?</p>
        </a>
      </div>
      <div className=" flex  justify-end mt-40 border-b border-slate-900/10">
        <div className=" flex items-center pb-10  font-raleway uppercase text-primary">
          <p className=" text-xs">Last updated on November 20, 2023</p>
        </div>
      </div>
      <footer className=" gap-1 font-bold flex justify-end mt-10 items-center font-raleway uppercase">
        <Link href="/DocsTheme">next</Link>
        <div>
          <Image src={arrowText} width={13} height={10} alt="Next" />
        </div>
      </footer>
    </div>
  );
}
