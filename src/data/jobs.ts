export interface Job {
  dates: string
  location: string
  role: string
  company: string
  bullets: string[]
}

export const jobs: Job[] = [
  {
    dates: '2021 — 2026',
    location: 'Cherkasy',
    role: 'Frontend Team Lead',
    company: 'Ekreative',
    bullets: [
      'Lead a cross-functional development team, owning delivery end to end — from architecture and estimation through release and production support.',
      'Owned frontend & full-stack delivery for a US telehealth platform (React, TypeScript, Vite, Tailwind CSS) with real-time video consultations and secure messaging (Zoom SDK, Twilio, WebSocket).',
      'Designed and maintained CI/CD pipelines (GitHub Actions) and production monitoring/alerting (Datadog, Sentry), improving release reliability and reducing time-to-deploy.',
      'Introduced AI-assisted development workflows (Claude Code, n8n automations) across the team, cutting repetitive work and speeding up delivery.',
      'Mentored developers through code review, pairing and technical guidance; set coding standards and led key technical decisions.',
      'Drove complex refactors and architecture decisions on a large, long-lived codebase, keeping it maintainable while the product and team scaled.',
      'Created a design system subproject to implement consistent UI components and styling across multiple projects, reducing development time and ensuring visual consistency.',
      'Restructured a large monolithic project following Feature-Sliced Design (FSD) principles, improving code organization and maintainability across the codebase.',
      'Worked with Lighthouse and AWS performance metrics to identify bottlenecks, collect data, and optimize application performance for better user experience.',
      'Refactored and rewrote a video conferencing module from Twilio to Zoom Web SDK, improving performance and reducing integration complexity.',
    ],
  },
  {
    dates: '2019 — 2021',
    location: 'Cherkasy',
    role: 'Web Developer',
    company: 'Ekreative',
    bullets: [
      'Built and maintained production web apps with React, TypeScript, NgRx and modern tooling.',
      'Worked across the stack with designers and backend engineers to ship features end to end.',
    ],
  },
  {
    dates: '2015 — 2019',
    location: 'Cherkasy',
    role: 'Web Developer',
    company: 'Pascalium',
    bullets: [
      'Delivered web and mobile apps for a range of client products, owning frontend implementation.',
      'Built cross-platform mobile apps across full project lifecycles, prototype to release.',
    ],
  },
  {
    dates: '2014 — 2015',
    location: 'Cherkasy',
    role: 'Web Developer',
    company: 'Webkate Ltd',
    bullets: [
      'Developed responsive, cross-browser web interfaces and supported ongoing client projects.',
    ],
  },
]
