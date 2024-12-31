import { motion } from "motion/react";

type Props = {
  isOpenToWork: boolean;
  text: string;
};

const OpenToWork = ({ isOpenToWork, text }: Props) => {
  if (isOpenToWork) {
    return (
      <div className="overflow-hidden whitespace-nowrap rounded-b-xl bg-white border-t-2 border-b-2 border-t-green-600 border-b-green-600">
        <>
          <motion.div
            initial={{
              x: -200,
            }}
            animate={{
              x: 250,
              transition: {
                duration: 5,
                repeat: Infinity,
              },
            }}
            className="font-bold text-green-600  break-normal"
          >
            <p>{text}</p>
          </motion.div>
        </>
      </div>
    );
  }

  return null;
};

export default OpenToWork;
