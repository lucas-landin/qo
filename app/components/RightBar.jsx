import Image from "next/image";
import { arrowText } from "../assets";
function RightBar() {
  return (
    <div className=" pl-6">
      <div className=" border-b border-slate-900/10">
        <p className=" font-raleway uppercase text-primary text-xs mb-8">
          On This Page /
        </p>
        <ul className=" font-semibold text-xs flex flex-col gap-5 mb-10 ">
          <li>
            <a target="blanck" href="https://nextra.site/">
              What is Nextra?
            </a>
          </li>
          <li>
            <a target="blanck" href="https://nextra.site/docs">
              Documentation
            </a>
          </li>
        </ul>
      </div>
      <ul className=" font-semibold text-xs flex flex-col gap-5 mt-10 ">
        <li>
          <a
            className="flex items-center gap-1"
            target="blanck"
            href="https://github.com/shuding/nextra/issues/new?title=Feedback%20for%20%E2%80%9CDocs%20Theme%E2%80%9D&labels=feedback"
          >
            Questions? Give Us Feedback{" "}
            <div>
              <Image
                src={arrowText}
                width={13}
                height={10}
                alt="Next"
                className=" pt-1"
              />
            </div>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-1"
            target="blanck"
            href="https://github.com/shuding/nextra-docs-template"
          >
            Edit this page on GitHub
            <div>
              <Image
                src={arrowText}
                width={13}
                height={10}
                alt="Next"
                className="pt-1"
              />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default RightBar;
