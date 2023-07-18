import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

export default function ContactIcon({
  Icon,
  title,
}: {
  Icon: IconType;
  title: string;
}) {
  const transition = "transition-all ease-out duration-500";
  const opacity = "bg-opacity-50 hover:bg-opacity-100";

  let wrapperStyle = twMerge(
    "group flex items-center cursor-pointer py-2 px-2 rounded-full hover:bg-[#222222] w-[102.5px]",
    transition,
    opacity,
  );

  let iconStyle = twMerge(
    "scale-0 translate-z-0 group-hover:transform-none text-xl font-extralight opacity-0 group-hover:opacity-100 group-hover:text-white",
    transition,
  );

  let titleStyle = twMerge(
    "flex-1 text-left translate-x-[-10px] group-hover:translate-x-[10px] group-hover:translate-z-0  text-black opacity-100",
    transition,
  );

  if (Icon.name === "FaGithub") {
    titleStyle = twMerge(titleStyle, "group-hover:text-white");
  } else if (Icon.name === "FaLinkedin") {
    iconStyle = twMerge(iconStyle, "fill-[#0C66C2]");
    wrapperStyle = twMerge(wrapperStyle, "hover:bg-[#0C66C2]/20 w-[110px]");
  } else if (Icon.name === "FaWhatsapp") {
    iconStyle = twMerge(iconStyle, "fill-[#4BCA5B]");
    wrapperStyle = twMerge(wrapperStyle, "hover:bg-[#4BCA5B]/20 w-[125px]");
  } else if (Icon.name === "FaEnvelope") {
    iconStyle = twMerge(iconStyle, "fill-[#D44638] ml-1");
    wrapperStyle = twMerge(wrapperStyle, "hover:bg-[#D44638]/20 w-[90px]");
  } else if (Icon.name === "FaYoutube") {
    iconStyle = twMerge(iconStyle, "fill-[#D44638]");
    wrapperStyle = twMerge(wrapperStyle, "hover:bg-[#D44638]/20 w-[110px]");
  }

  return (
    <button className={wrapperStyle}>
      <Icon className={iconStyle} />
      <div className={titleStyle}>{title}</div>
    </button>
  );
}
