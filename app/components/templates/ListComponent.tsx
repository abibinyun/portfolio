import Image, { StaticImageData } from "next/image";

import CheckIcon from "@/app/assets/icons/check.svg";
import Link from "next/link";

interface ListProps {
  logo?: string;
  text?: string;
  image?: StaticImageData;
  title?: string;
  desc?: string;
  type: "item" | "contact" | "project";
}

const ListComponent = ({ logo, text, image, title, desc, type }: ListProps) => {
  switch (type) {
    case "item":
      return (
        <div className="flex items-center gap-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex-shrink-0">
            <Image src={CheckIcon} alt="check" className="w-full h-full object-cover" />
          </div>
          <div>{text}</div>
        </div>
      );
    case "contact":
      return (
        <div className="flex items-center justify-center gap-x-2 text-sm min-[640px]:text-base">
          <div className="w-5 h-5 min-[640px]:w-10 min-[640px]:h-10 bg-black rounded-full flex items-center justify-center">
            {logo && <Image src={logo} width={100} height={100} alt="mail-icon" className="w-3 h-3 min-[640px]:w-5 min-[640px]:h-5 object-cover" />}
          </div>
          {text === "LinkedIn" ? (
            <Link href={"https://www.linkedin.com/in/muhammad-bilal-ismail"} target="_blank">
              {text}
            </Link>
          ) : (
            <div>{text}</div>
          )}
        </div>
      );
    case "project":
      return (
        <div className="w-full h-full flex flex-col justify-center items-center p-2 shadow-lg rounded-3xl">
          <div className="w-full h-[200px] rounded-3xl overflow-hidden shadow-md">{image && <Image src={image} alt="portfolio" className="w-full h-full object-cover rounded-3xl" />}</div>
          <div className="w-full h-[100px] flex flex-col items-center justify-center">
            <div className="font-semibold text-xl">{title}</div>
            <div>{desc}</div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default ListComponent;
