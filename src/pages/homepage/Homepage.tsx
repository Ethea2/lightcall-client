import { useNavigate } from "@solidjs/router"
import { createSignal } from "solid-js"
import "./Homepage.css"

export default function Homepage() {
  const nav = useNavigate()
  const [roomId, setRoomId] = createSignal("")

  const joinRoom = () => {
    const id = roomId().trim()
    nav(id ? `/room/${id}` : "/room")
  }

  return (
    <div class="page">
      <div class="glow glow-a" />
      <div class="glow glow-b" />
      <div class="glow glow-c" />

      <div class="card">
        <div class="brand">
          <span class="beacon">
            <span class="beacon-ring r1" />
            <span class="beacon-ring r2" />
            <span class="beacon-core" />
          </span>
          <h1 class="wordmark">LightCall</h1>
        </div>

        <p class="tagline">Step into the light. No accounts, no waiting rooms.</p>

        <div class="section">
          <span class="eyebrow">Join a room</span>
          <div class="join-row">
            <input
              class="room-input"
              placeholder="Enter room ID"
              value={roomId()}
              onInput={(e) => setRoomId(e.currentTarget.value)}
              onKeyDown={(e) => e.key === "Enter" && joinRoom()}
            />
            <button class="join-btn" onClick={joinRoom} aria-label="Join room">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="divider"><span>or</span></div>

        <button class="create-btn" onClick={() => nav("/room")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path d="M12 3v18M3 12h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          Create a room
        </button>
      </div>
    </div>
  )
}
