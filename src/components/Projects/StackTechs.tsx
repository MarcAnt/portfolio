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
      className="notranslate flex items-center flex-wrap gap-1"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      translate="no"
    >
      {techs.map((tech) => {
        return (
          <motion.code
            className="text-darkNavigation dark:text-textLight font-semibold  font-mono border border-LinkNavigationTo text-xs bg-LinkNavigationTo/30 dark:bg-LinkNavigationTo/20 rounded-[0.2rem] w-fit px-2 py-[0.5px]"
            variants={itemVariants}
            key={tech}
            title={tech}
          >
            {tech}
          </motion.code>
        );
      })}
    </motion.div>
  );
};

export default StackTechs;
