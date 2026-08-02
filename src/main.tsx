import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

import './styles/base.css'
import './styles/nav.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/work.css'
import './styles/projects.css'
import './styles/skills.css'
import './styles/ai.css'
import './styles/contact.css'
import './styles/footer.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
