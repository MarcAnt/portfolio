import { motion } from "motion/react";
type Props = {
  techs: string[];
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

const StackTechs = ({ techs }: Props) => {
  return (
    <motion.div
      className="flex items-center flex-wrap gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {techs.map((tech) => {
        return (
          <motion.span
            className="text-white border border-LinkNavigationTo text-xs bg-LinkNavigationTo dark:bg-LinkNavigationTo/20 rounded-md w-fit px-2 py-[0.5px]"
            variants={itemVariants}
            key={tech}
            title={tech}
          >
            {tech}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default StackTechs;
