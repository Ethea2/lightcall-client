import { useNavigate } from "@solidjs/router";

export default function Roompage() {
  const nav = useNavigate()
  return (
    <div>
      ROOM PAGE
      <button onClick={() => {
        nav("/")
      }}>
        to HOMEPAGE
      </button>
    </div>
  )
}
