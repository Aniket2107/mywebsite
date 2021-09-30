import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aniket | Portfolio ',
  lang: '',
  description: 'Software Engineer',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aniket Habib',
  subtitle: "I'm a Full Stack developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'aniket1.png',
  paragraphOne:
    "I am a final year enginerring student with majors in Computer Science and a member of student's council. In Addition to coding i have managed a lot of events at highschool.",
  paragraphTwo:
    'An energetic and imaginative young developer who is able to work alongside other talented IT professionals in creating websites to the very highest standards ',
  paragraphThree:
    'I have tried my hands on a lot of languages. Along with development I practise competitive coding as well.',
  resume: 'aniket-resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'seekho.jpg',
    title: 'Seekho',
    info: 'Seekho is and online platform to learn languages with help of leitners algorithm and various quizes(test) with a user friendly UI and a complete admin dashboard to manage language(data) and users',
    info2:
      'Stack: Node, Fastify & Mongodb for backend.React for frontend, Language used Typescript',
    livetext: '',
    url: 'https://seekho.netlify.app',
    repo: 'https://github.com/Aniket2107/seekho-app',
  },
  {
    id: uuidv1(),
    img: 'twitter.png',
    title: 'Twitter-Clone',
    info: 'A complete social media clone where use can tweet, like and comment on tweet,  follow user and many more',
    info2: 'Build using graphql and apollo server with postgresql as db and React as frontend',
    livetext: '',
    url: 'https://twitter-clone-01.netlify.app',
    repo: 'https://github.com/Aniket2107/twitter-clone', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'yt.jpg',
    title: 'Youtube-clone',
    info: 'As the name suggests its a youtube clone build in React.js with react-redux and youtube-v3 api with google authentication using firebase',
    info2: '',
    livetext: '',
    url: 'https://youtube-clone-001.netlify.app/',
    repo: 'https://github.com/Aniket2107/youtube-clone', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'sort.jpg',
    title: 'Sorting Visualiser',
    info: 'A project to visualise the tough and difficult algorithms that students find difficult.',
    info2: '',
    livetext: '',
    url: 'https://aniket2107.github.io/Sorting-visualizer/',
    repo: 'https://github.com/Aniket2107/Sorting-visualizer', // if no repo, the button will not show up
  },

  {
    id: uuidv1(),
    img: 'covid.jpg',
    title: 'Covid19 Tracker',
    info: 'Covid19 Tracker helps user aware of rise in covid cases throughout the world. The app has graphs for easy understanding and to help user compare data.',
    info2: '',
    livetext: '',
    url: 'https://aniket2107.github.io/covid-tracker/',
    repo: 'https://github.com/Aniket2107/covid-tracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'had096705@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anikethabib/',
    },
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/aniket.ts/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Aniket2107',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
