import { iconSet } from "../../utils/iconSet";
import { motion } from "motion/react";

type Props = {
  stack: string[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

const StackIcons = ({ stack }: Props) => {
  const replacedIcons = iconSet.filter((icon) => {
    const isFiltered = stack.includes(icon.alt);

    if (isFiltered) {
      return icon;
    }
  });

  return (
    <motion.div
      className="flex items-center flex-wrap gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {replacedIcons.map((icon) => {
        return (
          <motion.img
            variants={itemVariants}
            src={icon.url}
            key={icon.alt}
            width={20}
            height={20}
            alt={icon.alt}
            loading="lazy"
          />
        );
      })}
    </motion.div>
  );
};

export default StackIcons;
