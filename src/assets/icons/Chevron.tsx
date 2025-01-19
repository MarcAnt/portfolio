"use client";

import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

type Props = {
  className: string | undefined;
};

const defaultTransition: Transition = {
  times: [0, 0.4, 1],
  duration: 0.5,
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const CircleChevronUpIcon = ({ className }: Props) => {
  const controls = useAnimation();

  return (
    <div
      className={`cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center ${className}`}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        variants={iconVariants}
        transition={{ duration: 0.2 }}
        style={{ originY: 0.55 }}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <motion.path
          variants={{
            normal: { y: 0 },
            animate: {
              y: [0, -2, 0],
            },
          }}
          transition={defaultTransition}
          animate={controls}
          d="m8 14 4-4 4 4"
        />
      </motion.svg>
    </div>
  );
};

export { CircleChevronUpIcon };
