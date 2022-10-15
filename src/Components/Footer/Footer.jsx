import React from "react";
import GithubIcon from "../../Assets/SocialIcons/GithubIcon.png";
import ResumeIcon from "../../Assets/SocialIcons/ResumeIcon.png";
import LiIcon from "../../Assets/SocialIcons/LiIcon.png";

function Footer() {
  return (
    <div className="flex flex-col justify-center align-center mb-2">
      <div className="mb-2 flex flex-row justify-center align-center">
        <a href="https://www.linkedin.com/in/walidrahim/" target="_blank">
          <img className="w-10 h-10" src={LiIcon} alt="linkedIn icon" />
        </a>
        <a href="" target="_blank">
          <img className="w-10 h-10" src={ResumeIcon} alt="Resume icon" />
        </a>
        <a href="https://github.com/walid2d" target="_blank">
          <img className="w-10 h-10" src={GithubIcon} alt="Github icon" />
        </a>
      </div>
      <h3 className="text-white text-sm self-center">
        Designed and Developed by Walid Rahim
      </h3>
    </div>
  );
}
export default Footer;
