import Image, { StaticImageData } from "next/image";

interface CardProps {
  logo: StaticImageData;
  title: string;
  content: string[];
}

const CardAbout = ({ logo, title, content }: CardProps) => {
  return (
    <div className="w-[80%] min-[640px]:w-[50%] h-[150px] flex flex-col justify-between items-center border-[1px] border-slate-400 rounded-3xl py-3">
      <div className="flex flex-col items-center justify-center">
        <div className="w-10 h-10">
          <Image src={logo} width={100} height={100} alt="logo" className="object-cover" />
        </div>
        <div className="font-bold">{title}</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {content.map((item: string, index: number) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default CardAbout;
