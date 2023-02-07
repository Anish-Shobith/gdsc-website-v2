import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'GDSC-SJEC',
  origin: 'https://gdsc-website-v2.vercel.app/',
  basePathname: '/',
  trailingSlash: false,
  title: 'GDSC-SJEC - Official Website of GDSC-SJEC',
  description: 'Official Website of GDSC-SJEC',
  defaultImage: defaultImage,
  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  language: 'en',
  textDirection: 'ltr',
  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),
};

export const SITE = { ...CONFIG };
export const DATE_FORMATTER = CONFIG.dateFormatter;
