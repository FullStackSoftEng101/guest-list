import { useEffect, useState } from "react";
import { getGuest } from "./api";

export default function GuestDetails({ selectedGuestId, setSelectedGuestId }) {
  const [guest, setGuests] = useState();

  const syncGuest = async () => {
    const data = await getGuest(selectedGuestId);
    setGuests(data);
  };
  useEffect(() => {
    syncGuest();
  }, []);
  if (!guest) return <p>Loading...</p>;
  return (
    <article>
      <h1>{guest.name}</h1>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
      <p>{guest.bio}</p>
      <p>{guest.job}</p>
      <button onClick={() => setSelectedGuestId(null)}>Back</button>
    </article>
  );
}
