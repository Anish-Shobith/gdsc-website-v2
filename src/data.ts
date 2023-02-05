import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Events',
      href: getPermalink('/events'),
    },
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'Team',
      href: getPermalink('/team'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/faq'),
    },
  ],
  actions: [
    { type: 'button', text: 'Join Us', href: 'https://gdsc.community.dev/st-joseph-engineering-college-mangaluru/' },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Mail', icon: 'tabler:inbox', href: 'mailto:gdsc@sjec.ac.in' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/gdsc.sjec/' },
    { ariaLabel: 'Linked-In', icon: 'tabler:brand-linkedin', href: 'https://in.linkedin.com/company/gdsc-sjec' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/GDSC-SJEC' },
  ],
  footNote: `
    <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/GDSC-SJEC">GDSC-SJEC</a> &copy; 2022 - Present · All rights reserved.
  `,
};
