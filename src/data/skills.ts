export interface SkillGroup {
  title: string
  tags: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    tags: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Vue.js',
      'Angular',
      'NgRx',
      'Chart.js',
      'Zod',
      'Cross-browser compatibility',
    ],
  },
  {
    title: 'Styling & design',
    tags: [
      'HTML5',
      'Semantic HTML',
      'CSS',
      'SASS / SCSS',
      'Tailwind CSS',
      'Bootstrap',
      'Material Design',
      'Angular Material',
      'PrimeNG',
      'Figma',
      'Photoshop',
    ],
  },
  {
    title: 'Backend & data',
    tags: [
      'Node.js',
      'Python',
      'gRPC',
      'PostgreSQL',
      'Prisma',
      'Drizzle ORM',
      'Redis',
      'Kafka',
      'Firebase / Cloud Firestore',
      'Socket.io',
      'Twilio',
      'Zoom Web SDK',
      'AWS',
      'Heroku',
    ],
  },
  {
    title: 'Mobile & desktop',
    tags: ['Flutter / Dart', 'Electron'],
  },
  {
    title: 'Build & tooling',
    tags: ['Vite', 'Webpack', 'Yarn', 'Storybook'],
  },
  {
    title: 'Delivery & workflow',
    tags: [
      'CI/CD',
      'GitHub Actions',
      'Git',
      'GitHub',
      'Datadog',
      'Sentry',
      'Jira / Redmine',
      'Notion',
    ],
  },
  {
    title: 'Leadership',
    tags: ['Team leadership', 'Mentoring', 'Code review', 'Architecture & release ownership'],
  },
]

export const earlierSkills: string[] = [
  'AngularJS',
  'jQuery',
  'Ionic 1–4',
  'Cordova / PhoneGap',
  'Gulp',
  'LESS',
  'PUG / Jade',
]
