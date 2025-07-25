import { GithubIcon } from "../icons/github-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 lg:flex-row justify-between py-10 px-8 lg:py-20 lg:px-24 lg:items-center border-t-3 border-[#F3F4F6]">
      <div className="flex flex-col gap-2 text-center lg:text-start">
        <h1 className="text-[#21242C] font-bold text-xl">&lt; Laura /&gt;</h1>
        <p className="text-[#626B84] text-lg">
          Estudante de ADS apaixonada por tecnologia
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="flex font-semibold text-lg lg:justify-end justify-center">
          Conecte-se
        </h2>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.instagram.com/lauranarciso_/"
            target="_blank"
            className="p-2 rounded-lg bg-white hover:bg-[#E5E7EB] border border-[#d4d1d1]"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/laura-narciso-peixoto-3b9701332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            className="p-2 rounded-lg bg-white hover:bg-[#E5E7EB] border border-[#d4d1d1]"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/lauranarciso"
            target="_blank"
            className="p-2 rounded-lg bg-white hover:bg-[#E5E7EB] border border-[#d4d1d1]"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
