import Image from "next/image";
import { logo } from "../assets";
function Header() {
  return (
    <div className="py-1 border-b border-slate-900/10 lg:px-16 lg:border-0 mx-4 lg:mx-0">
      <div className=" flex justify-between">
        <Image src={logo} width={81} height={26} alt="Logo" className=" ml-5" />

        <div className=" flex py-2 px-1 items-center gap-4 text-header ">
          <p className=" font-alike uppercase text-sm">About</p>
          <p className=" font-alike uppercase text-sm">Contact ↗</p>

          <div className="relative flex items-center ">
            <input
              type="text"
              placeholder="Search documentation…"
              className=" bg-focus py-2 pl-2 pr-20 text-sm font-alike text-[#6B7280]"
            />
            <kbd className="absolute my-1.5 right-1 h-5 rounded bg-white px-1.5 font-mono text-[10px] font-medium text-gray-500 border items-center gap-1 pointer-events-none opacity-100">
              CTRL K
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
