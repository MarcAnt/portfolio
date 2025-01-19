import { motion, type Variants } from "motion/react";
import type { PropsWithChildren } from "react";

type Props = {
  href?: string | undefined;
  svgClassName?: string | undefined;
  className?: string | undefined;
} & PropsWithChildren;

const arrowVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      mass: 1,
    },
  },
};

const AnimatedLink = ({
  href,
  children,
  className = "",
  svgClassName = "",
}: Props) => {
  return (
    <motion.a
      target="_blank"
      rel="noopener"
      href={href}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`underline transition-all duration-300 ease-in-out hover:opacity-80  text-blueLink ${className}`}
    >
      {children}

      <motion.svg
        variants={arrowVariants}
        className={svgClassName}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6.189 17.289L5.5 16.6L15.58 6.5H6.289v-1h11v11h-1V7.208z"
        ></path>
      </motion.svg>
    </motion.a>
  );
};

export default AnimatedLink;
