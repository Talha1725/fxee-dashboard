import * as AllCountry from "country-flag-icons/react/1x1";
import { IconUK } from "@/components/ui/icon";

export interface Language {
  value: string;
  label: string;
  shortLabel: string;
  flag: React.ReactNode;
  navbarFlag: React.ReactNode;
}

export const LANGUAGES: Language[] = [
  {
    value: "English (US)",
    label: "English (US)",
    shortLabel: "EN-US",
    flag: <AllCountry.US className="w-5 h-5 rounded-full" />,
    navbarFlag: <AllCountry.US className="w-4 h-4 rounded-full" />
  },
  {
    value: "English (UK)",
    label: "English (UK)", 
    shortLabel: "EN-UK",
    flag: <AllCountry.GB className="w-5 h-5 rounded-full" />,
    navbarFlag: <AllCountry.GB className="w-4 h-4 rounded-full" />
  },
  {
    value: "Spanish",
    label: "Spanish",
    shortLabel: "Español",
    flag: <AllCountry.ES className="w-5 h-5 rounded-full" />,
    navbarFlag: <AllCountry.ES className="w-4 h-4 rounded-full" />
  },
  {
    value: "French",
    label: "French",
    shortLabel: "Français", 
    flag: <AllCountry.FR className="w-5 h-5 rounded-full" />,
    navbarFlag: <AllCountry.FR className="w-4 h-4 rounded-full" />
  },
  {
    value: "German",
    label: "German",
    shortLabel: "Deutsch",
    flag: <AllCountry.DE className="w-5 h-5 rounded-full" />,
    navbarFlag: <AllCountry.DE className="w-4 h-4 rounded-full" />
  },
  {
    value: "Italian",
    label: "Italian",
    shortLabel: "Italiano",
    flag: <AllCountry.IT className="w-5 h-5 rounded-full" />,
    navbarFlag: <AllCountry.IT className="w-4 h-4 rounded-full" />
  },
  {
    value: "Portuguese",
    label: "Portuguese",
    shortLabel: "Português",
    flag: <AllCountry.PT className="w-5 h-5 rounded-full" />,
    navbarFlag: <AllCountry.PT className="w-4 h-4 rounded-full" />
  },
  {
    value: "Russian",
    label: "Russian",
    shortLabel: "Русский",
    flag: <AllCountry.RU className="w-5 h-5 rounded-full" />,
    navbarFlag: <AllCountry.RU className="w-4 h-4 rounded-full" />
  },
  {
    value: "Chinese",
    label: "Chinese",
    shortLabel: "中文",
    flag: <AllCountry.CN className="w-5 h-5 rounded-full" />,
    navbarFlag: <AllCountry.CN className="w-4 h-4 rounded-full" />
  }
];

export const getLanguageByValue = (value: string): Language => {
  return LANGUAGES.find(lang => lang.value === value) || LANGUAGES[0];
};