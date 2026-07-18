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
      <div class="halo" />

      <div class="content">
        <h1 class="wordmark">LightCall</h1>
        <p class="tagline">Step into the light. No accounts, no waiting rooms.</p>

        <div class="divider" />

        <div class="join-row">
          <div class="field">
            <label class="field-label" for="room-id">Room ID</label>
            <input
              id="room-id"
              class="room-input"
              placeholder="Enter code"
              value={roomId()}
              onInput={(e) => setRoomId(e.currentTarget.value)}
              onKeyDown={(e) => e.key === "Enter" && joinRoom()}
            />
          </div>
          <button class="join-btn" onClick={joinRoom} aria-label="Join room">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="or">or</div>

        <button class="create-btn" onClick={() => nav("/room")}>
          Create a room
        </button>
      </div>
    </div>
  )
}
