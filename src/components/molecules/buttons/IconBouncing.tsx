import { useIncrementCountByOne } from "../../../hooks/useIncrementCountByOne";
import { FaArrowDown } from "react-icons/fa";
import { ButtonProps } from "../../types/generic";
import { IconType } from "react-icons";
import { useParallaxContext } from "../../../context/parallaxContext";

type Props = Omit<ButtonProps, "className"> & {
  Icon: IconType;
};

const delayInSeconds = 2;
const maxScrollTop = 200;
export default function IconBouncingButton({ Icon, ...rest }: Props) {
  const { scrollTop } = useParallaxContext();

  const { count } = useIncrementCountByOne(scrollTop < maxScrollTop ? 350 : 0);

  let translateY = 0;
  let opacity = 0;
  if (count > delayInSeconds && scrollTop < maxScrollTop) {
    translateY = count % 2 === 0 ? 25 : 0;
    opacity = count % 2 !== 0 ? 1 : 0.6;
  }

  return (
    <button
      {...rest}
      style={{
        transform: `translateY(${translateY}px)`,
        opacity: opacity,
      }}
      className={
        "bg-[#EFCBBD] p-5 rounded-full transition duration-500 ease-in-out"
      }
    >
      <Icon className={"text-5xl"} />
    </button>
  );
}

const ArrowDownBouncingButton = ({
  ...rest
}: Omit<ButtonProps, "className">) => {
  return <IconBouncingButton {...rest} Icon={FaArrowDown} />;
};

IconBouncingButton.ArrowDown = ArrowDownBouncingButton;
