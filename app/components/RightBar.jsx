function RightBar() {
    return ( 
    <div className=" pl-6">
      <div className=" border-b border-slate-900/10">
      <p className=" font-mono uppercase text-primary text-xs mb-8">On This Page /</p>
       <ul className=" font-semibold text-xs flex flex-col gap-5 mb-10 ">
        <li>
            <a target="blanck" href="https://nextra.site/">What is Nextra?</a>
        </li>
        <li>
            <a target="blanck" href="https://nextra.site/docs">Documentation</a>
        </li>
       </ul>
      </div>
      <ul className=" font-semibold text-xs flex flex-col gap-5 mt-10 ">
        <li>
            <a target="blanck" href="https://qoves.com/" >Questions? Give Us Feedback →</a>
        </li>
        <li>
            <a  target="blanck" href="https://github.com/shuding/nextra-docs-template">Edit this page on GitHub →</a>
        </li>
       </ul>
    </div> 
    );
}

export default RightBar;