import { useEffect } from "react";

type Props = {
  targetELement: React.MutableRefObject<HTMLElement | null>;
};

const config: MutationObserverInit = {
  attributes: true,
  childList: true,
  subtree: true,
};

const UseGetPosition = ({ targetELement }: Props) => {
  useEffect(() => {
    const callback: MutationCallback = (mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
      }
    };

    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    if (targetELement.current) {
      observer.observe(targetELement.current!, config);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return {};
};

export default UseGetPosition;
