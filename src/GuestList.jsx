import { useEffect, useState } from "react";
import { getGuests } from "./api.js";
export default function GuestList() {
  const [guests, setGuests] = useState();

  async function syncGuests() {
    const data = await getGuests();
    setGuests(data);
  }

  useEffect(() => {
    syncGuests();
  }, []);

  return (
    <article>
      <h1></h1>
      <ul>
        <li>
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
        </li>
        {guests ? (
          guests.map((guest) => (
            <li key={guest.id}>
              <span>{guest.name}</span>
              <span>{guest.email}</span>
              <span>{guest.phone}</span>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <p>Please select a guest to see more datails</p>
    </article>
  );
}
