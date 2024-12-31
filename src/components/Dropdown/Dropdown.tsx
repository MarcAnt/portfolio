import { useState, type PropsWithChildren } from "react";
import { UseOutsideClick } from "./Hooks/UseOutsideClick";
import { AnimatePresence, motion } from "motion/react";

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
        className="relative text-textLight flex text-sm justify-around items-center gap-2 rounded px-3 py-1.5 bg-gradient-to-t from-LinkNavigationFrom to-LinkNavigationTo ring-2 ring-borderLinkNavigation"
        type="button"
        title={buttonText}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault();
          setToggle((prev) => !prev);
        }}
      >
        {buttonText}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"
          ></path>
        </svg>
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
