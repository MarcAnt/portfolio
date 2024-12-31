import { motion } from "motion/react";
import { useEffect, useState, type PropsWithChildren } from "react";
import { useTranslations } from "../../i18n/utils";

type Props = {
  onOpen?: (isOpen: boolean) => void;
  lang: "en" | "es";
} & PropsWithChildren;

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const Accordion = ({ children, onOpen, lang }: Props) => {
  const t = useTranslations(lang);
  const [toggleOpen, setToggleOpen] = useState(true);
  useEffect(() => {
    if (onOpen) onOpen(toggleOpen);
  }, [toggleOpen]);

  return (
    <>
      <motion.button
        type="button"
        className="flex sm:absolute  items-center sm:justify-center right-0"
        title={toggleOpen ? t("hide") : t("show")}
        onClick={() => setToggleOpen((prev) => !prev)}
        initial={false}
        animate={toggleOpen ? "open" : "closed"}
      >
        <span className="text-textDark dark:text-textLight">
          {toggleOpen ? t("hide") : t("show")}
        </span>
        <motion.svg
          variants={iconVariants}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className="text-textDark dark:text-textLight"
        >
          <path
            fill="currentColor"
            d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
          />
        </motion.svg>
      </motion.button>

      {toggleOpen ? children : null}
    </>
  );
};

export default Accordion;
