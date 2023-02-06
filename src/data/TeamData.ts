export interface Email {
  social: 'email';
  link: string;
}
export interface Social {
  social: string;
  link: string;
}

type SocialTuple = [{ social: 'email', link: string }, ...Array<Social>];

export interface TeamMember {
  name: string;
  image_url: string;
  designation: string;
  socials: SocialTuple
}

export const teamDetails: TeamMember[] = [
  {
    name: 'Pragnya Nagure',
    image_url: '/src/assets/images/team/4SO19CS110.jpg',
    designation: `GDSC Lead`,
    socials: [
      { social: 'email', link: 'pragnya.nagure2002@gmail.com' },
      { social: 'linkedin', link: 'https://www.linkedin.com/in/pragnya-nagure/' },
      { social: 'github', link: 'https://github.com/xxpsynagure' },
    ]
  },
  {
    name: 'Ashish Kishore Kumar',
    image_url: '/src/assets/images/team/4SO19CS027.png',
    designation: `Game Development Lead`,
    socials: [
      { social: 'email', link: 'ashishkishore0812@gmail.com' },
      { social: 'linkedin', link: 'https://www.linkedin.com/in/ashish-kishore-kumar/' },
      { social: 'github', link: 'https://github.com/Ashish4869' },
    ]
  },
  {
    name: 'Godnon Dsilva',
    image_url: '/src/assets/images/team/4SO19CS056.jpg',
    designation: `Web Development Lead`,
    socials: [
      { social: 'email', link: 'godnondsilva@gmail.com' },
      { social: 'linkedin', link: 'https://www.linkedin.com/in/godnon-dsilva' },
      { social: 'github', link: 'https://github.com/godnondsilva' },
    ]
  },
  {
    name: 'Avinash Murali',
    image_url: '/src/assets/images/team/4SO19CS034.jpg',
    designation: `UI/UX Lead`,
    socials: [
      { social: 'email', link: 'avinashmuralidharan2@gmail.com' },
      { social: 'linkedin', link: 'https://www.linkedin.com/in/avinash-muralidharan-75b1a9226' },
      { social: 'github', link: 'https://github.com/avi7501' },
    ]
  },
  {
    name: 'Pravin Kumar',
    image_url: '/src/assets/images/team/4SO19CS119.jpg',
    designation: `AI/ML Lead`,
    socials: [
      { social: 'email', link: '19cs119.pravin@sjec.ac.in' },
      { social: 'linkedin', link: 'https://www.linkedin.com/in/pravin--kumar/' },
      { social: 'github', link: 'https://github.com/pravin-pk' },
    ]
  },
  {
    name: 'Yashas Ip',
    image_url: '/src/assets/images/team/4SO19CS180.jpg',
    designation: `Competitive Programming Lead`,
    socials: [
      { social: 'email', link: '19cs180.yashas@sjec.ac.in' },
      { social: 'linkedin', link: 'https://www.linkedin.com/in/yashas-ip-4926641b4/' },
      { social: 'github', link: 'https://github.com/yashasip' },
    ]
  },
  {
    name: 'Pratheek R',
    image_url: '/src/assets/images/team/4SO19CS116.jpeg',
    designation: `Android Lead`,
    socials: [
      { social: 'email', link: 'r.pratheek01@gmail.com' },
      { social: 'linkedin', link: 'https://www.linkedin.com/in/pratheek-raghunath/' },
      { social: 'github', link: 'https://github.com/pratheek-raghunath' },
    ]
  },
  {
    name: 'Oren Saldanha',
    image_url: '/src/assets/images/team/4SO19CS105.jpg',
    designation: `Cloud Lead`,
    socials: [
      { social: 'email', link: 'orensaldanha@gmail.com' },
      { social: 'linkedin', link: 'https://www.linkedin.com/in/orensaldanha/'} ,
      { social: 'github', link: 'https://github.com/orensaldanha' },
    ]
  },
  {
    name: 'Adithya K Shetty',
    image_url: '/src/assets/images/team/4SO19CS007.png',
    designation: `Developer (Web Team)`,
    socials: [
      { social: 'email', link: '4so19cs007.adithya@sjec.ac.in'},
      { social: 'linkedin', link: 'https://www.linkedin.com/in/adithya-k-shetty-107842190'},
      { social: 'github', link: 'https://github.com/Adithya-K-Shetty'},
    ]
  },
  {
    name: 'Errol Ken Pereira',
    image_url: '/src/assets/images/team/4SO19CS050.jpg',
    designation: `Developer (UI/UX Team)`,
    socials: [
      { social: 'email', link: 'errolkenpereira@gmail.com' },
      { social: 'linkedin', link: 'https://www.linkedin.com/in/errol-ken-pereira' },
      { social: 'github', link: 'https://github.com/Errolken' },
    ]
  },
  {
    name: 'Srujan Kashyap D',
    image_url: '/src/assets/images/team/4SO19CS161.jpg',
    designation: 'Developer (CP Team)',
    socials: [
      { social: 'email', link: 'srujanskd@gmail.com' },
      { social: 'linkedin', link: 'https://www.linkedin.com/in/srujankashyapd' },
      { social: 'github', link: 'https://github.com/srujanskd' },
    ]
  }
];
