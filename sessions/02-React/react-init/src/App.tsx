import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Title } from './components/Title'
import EventList from './components/EventList'
import type { Event } from './components/EventCard'

const MOCK_EVENTS: Event[] = [
  { id: 1, title: "Charla React", date: "2025-10-01 10:00", location: "UPB La Paz", description: "Introducción a React y ecosistema." },
  { id: 2, title: "Hackathon", date: "2025-10-05 09:00", location: "UPB Cochabamba", description: "48h de código y café." },
  { id: 3, title: "WIE Meetup", date: "2025-10-12 18:00", location: "Auditorio A", description: "Networking y lightning talks." },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title title="dashboard" name="Mel"></Title>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div style={{ maxWidth: 720, margin: "24px auto", padding: 16, background: "#f7f7f7", borderRadius: 12 }}>
        <h2 style={{ marginBottom: 16 }}>Eventos</h2>
        <EventList events={MOCK_EVENTS} />
      </div>
    </>
  )
}

export default App
