import Accordion from "../Accordion/Accordion";

import AnimatedLink from "../AnimatedLink/AnimatedLink";

type Tracks = {
  idTrack: string;
  dateTrack: string;
  urlTrack?: string | null;
  companyNameTrack: string;
  titleTrack: string;
  positionTrack: string;
  country: string;
  remote: boolean;
  achievementsTrack: string[];
  whatIDidTrack: string[];
  isOpen: boolean;
};

type Props = {
  lang: "en" | "es";
  tracks: Tracks[];
};

const TimeTracker = ({ tracks, lang }: Props) => {
  return (
    <div className="relative w-full">
      <div className="w-[1px] h-full bg-textMessage absolute"></div>
      {tracks.map((track) => {
        return (
          <div key={track.idTrack}>
            <span className="w-4 h-4 -left-2 absolute rounded-full block bg-LinkNavigationTo"></span>
            <div className="flex flex-col ml-5">
              <div className="flex items-center justify-between">
                <time
                  className={`flex font-mono items-center justify-center gap-1 dark:text-white text-textDark border border-LinkNavigationTo text-md md:text-xs bg-LinkNavigationTo/20 dark:bg-blue-100/10 rounded-[0.2rem] w-fit px-1 py-[0.5px]`}
                >
                  <span className="block opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
                      />
                      <path
                        fill="currentColor"
                        d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z"
                      />
                    </svg>
                  </span>
                  {track.dateTrack}
                </time>
              </div>

              <div
                className={`text-textDark dark:text-textLight text-lg lg:text-base font-bold italic pt-1 flex`}
              >
                <p className={"mb-4"}>{track.titleTrack}</p>
              </div>

              <Accordion lang={lang} isOpen={track.isOpen}>
                <div className=" mb-3 xl:mb-8">
                  {track.urlTrack ? (
                    <div className="flex items-center mb-2">
                      <AnimatedLink
                        href={track.urlTrack}
                        className="flex items-center"
                      >
                        {track.companyNameTrack}
                      </AnimatedLink>
                    </div>
                  ) : null}

                  <ul className="list-disc ml-5">
                    {track.whatIDidTrack.map((task, idx) => {
                      return (
                        <li
                          key={idx}
                          className="text-textDark dark:text-textLight text-lg "
                        >
                          {task}
                        </li>
                      );
                    })}
                  </ul>

                  <ul className="list-disc ml-5">
                    {track.achievementsTrack.map((task, idx) => {
                      return (
                        <li
                          key={idx}
                          className="text-textDark dark:text-textLight text-lg "
                        >
                          {task}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Accordion>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimeTracker;
