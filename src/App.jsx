import { useState } from "react";
import GuestList from "./GuestList";

export default function App() {
  const [selectedGuestId, setSelectedGuestId] = useState();
  return (
    <>
      <GuestList setSelectedGuestId={setSelectedGuestId} />
    </>
  );
}
