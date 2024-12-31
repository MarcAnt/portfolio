import Accordion from "../Accordion/Accordion";
import { useTranslations } from "../../i18n/utils";

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
};

type Props = {
  lang: "en" | "es";
  tracks: Tracks[];
};

const TimeTracker = ({ tracks, lang }: Props) => {
  const t = useTranslations(lang);

  return (
    <div className="relative w-full">
      <div className="w-[0.5px] h-full bg-textMessage absolute"></div>
      {tracks.map((track) => {
        return (
          <div key={track.idTrack}>
            <span className="w-4 h-4 -left-2 absolute rounded-full block bg-LinkNavigationTo"></span>
            <div className="flex flex-col ml-5">
              <div className="flex items-center justify-between">
                <time
                  className={`dark:text-white text-textDark border border-LinkNavigationTo text-md md:text-xs bg-LinkNavigationTo/20 dark:bg-blue-100/10 rounded-md w-fit px-2 py-[0.5px]`}
                >
                  {track.dateTrack}
                </time>
              </div>

              <div
                className={`text-textDark dark:text-textLight text-lg lg:text-base font-bold italic pt-1 flex`}
              >
                <p className="mb-2">{track.titleTrack}</p>
              </div>

              <Accordion lang={lang}>
                <div className="py-3 mb-5 xl:mb-10">
                  {track.urlTrack ? (
                    <div className="flex items-center mb-2 ">
                      <span className="inline-block mr-2  dark:text-textLight">
                        {t("section.experience.site")}
                      </span>
                      <a
                        target="_blank"
                        rel="noopener"
                        href={track.urlTrack}
                        className="underline text-blueLink items-center flex"
                      >
                        {track.companyNameTrack}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M6.189 17.289L5.5 16.6L15.58 6.5H6.289v-1h11v11h-1V7.208z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  ) : null}
                  <span className="text-textDark dark:text-textLight font-semibold">
                    {t("section.experience.whatIDid")}
                  </span>

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
                  <span className="text-textDark dark:text-textLight font-semibold mt-3 block">
                    {t("section.experience.whatILearned")}
                  </span>
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
