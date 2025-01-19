import { motion } from "motion/react";
import { useEffect, useState, type PropsWithChildren } from "react";
import { useTranslations } from "../../i18n/utils";
import { CircleChevronUpIcon } from "../../assets/icons/Chevron";

type Props = {
  onOpen?: (isOpen: boolean) => void;
  isOpen: boolean;
  lang: "en" | "es";
} & PropsWithChildren;

const Accordion = ({ children, onOpen, isOpen, lang }: Props) => {
  const t = useTranslations(lang);
  const [toggleOpen, setToggleOpen] = useState(isOpen);
  useEffect(() => {
    if (onOpen) onOpen(toggleOpen);
  }, [toggleOpen]);

  return (
    <>
      <motion.button
        type="button"
        className="flex sm:absolute items-center sm:justify-center right-0 group text-textDark dark:text-textLight "
        title={toggleOpen ? t("hide") : t("show")}
        onClick={() => setToggleOpen((prev) => !prev)}
        initial={false}
        animate={toggleOpen ? "open" : "closed"}
      >
        <span className=" text-textDark dark:text-textLight opacity-60 transition-opacity ease-in-out group-hover:opacity-100 text-sm">
          {toggleOpen ? t("hide") : t("show")}
        </span>
        {/* <motion.svg
          variants={iconVariants}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className="text-textDark dark:text-textLight fill-red-300"
        >



         
        </motion.svg> */}
        <CircleChevronUpIcon
          className={
            "opacity-60 transition-opacity ease-in-out group-hover:opacity-100"
          }
        />
      </motion.button>

      {toggleOpen ? children : null}
    </>
  );
};

export default Accordion;
