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
      'Angular 1–6 / AngularJS',
      'NgRx',
      'jQuery',
      'Chart.js',
      'JSON',
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
      'LESS',
      'Tailwind CSS',
      'Bootstrap',
      'Material Design',
      'Angular Material',
      'PrimeNG',
      'PUG / Jade',
      'Figma',
      'Photoshop',
    ],
  },
  {
    title: 'Backend & data',
    tags: [
      'Node.js',
      'Full-stack development',
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
    tags: ['Flutter / Dart', 'Cordova', 'PhoneGap', 'Ionic 1–4', 'Electron', 'Android Studio'],
  },
  {
    title: 'Build & tooling',
    tags: ['Vite', 'Webpack', 'Gulp.js', 'Yarn', 'Storybook', 'PowerShell', 'WebStorm / PhpStorm'],
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
