import { useState, type PropsWithChildren } from "react";
import { UseOutsideClick } from "./Hooks/UseOutsideClick";
import { AnimatePresence, motion } from "motion/react";
import { DownloadIcon } from "../../assets/icons/DownloadIcon";

type Props = {
  buttonText: string;
} & PropsWithChildren;

const Dropdown = ({ children, buttonText }: Props) => {
  const [toggle, setToggle] = useState(false);

  const ref = UseOutsideClick(() => {
    setToggle(false);
  });

  return (
    <div className="relative" ref={ref}>
      <motion.button
        className="relative text-textLight flex text-sm justify-around items-center gap-2 rounded px-3 py-1.5 ring-2 transition-all duration-300 ease-in-out ring-borderLinkNavigation bg-LinkNavigationFrom hover:bg-LinkNavigationTo"
        type="button"
        title={buttonText}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault();
          setToggle((prev) => !prev);
        }}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {buttonText}
        <DownloadIcon />
      </motion.button>

      <AnimatePresence initial={false}>
        {toggle ? (
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="absolute top-10 left-0 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            key={"box"}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
