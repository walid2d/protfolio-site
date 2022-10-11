import React from "react";
import { ReactComponent as Html5logo } from "../../Assets/Logos/html5.svg";
import { ReactComponent as Express } from "../../Assets/Logos/express.svg";
import { ReactComponent as Javascript } from "../../Assets/Logos/javascript.svg";
import { ReactComponent as Github } from "../../Assets/Logos/github.svg";
import { ReactComponent as Mongodb } from "../../Assets/Logos/mongodb.svg";
import { ReactComponent as Mysql } from "../../Assets/Logos/mysql.svg";
import { ReactComponent as Nodedotjs } from "../../Assets/Logos/nodedotjs.svg";
import { ReactComponent as Reactlogo } from "../../Assets/Logos/react.svg";
import { ReactComponent as Sass } from "../../Assets/Logos/sass.svg";
import { ReactComponent as Storybook } from "../../Assets/Logos/storybook.svg";
import { ReactComponent as Tailwindcss } from "../../Assets/Logos/tailwindcss.svg";

function Toolbox() {
  return (
    <section className="flex justify-between flex-col">
      <h2 className="text-white text-lg">/skills & Tools</h2>
      <div className="flex justify-between flex-row w-9/12 ">
        <Html5logo className="w-20  h-20 " fill="white" />
        <Tailwindcss className="w-20  h-20 " fill="white" />
        <Sass className="w-20  h-20 " fill="white" />
        <Javascript className="w-20  h-20 " fill="white" />
        <Reactlogo className="w-20  h-20 " fill="white" />
        <Storybook className="w-20  h-20 " fill="white" />
        <Mysql className="w-20  h-20 " fill="white" />
        <Mongodb className="w-20  h-20 " fill="white" />
        <Nodedotjs className="w-20  h-20 " fill="white" />
        <Express fill="white" className="w-20 h-20 " fill="white" />
        <Github className="w-20  h-20 " fill="white" />
      </div>
    </section>
  );
}
export default Toolbox;
