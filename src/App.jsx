import { useState } from "react";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";

export default function App() {
  const [selectedGuestId, setSelectedGuestId] = useState();
  return (
    <>
      {selectedGuestId ? (
        <GuestDetails
          selectedGuestId={selectedGuestId}
          setSelectedGuestId={setSelectedGuestId}
        />
      ) : (
        <GuestList setSelectedGuestId={setSelectedGuestId} />
      )}
    </>
  );
}
