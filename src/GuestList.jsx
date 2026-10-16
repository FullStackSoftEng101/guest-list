import { useState } from "react";
import { useEffect } from "react";
import { getGuests } from "./api";
export default function GuestList() {
  const [guests, setGuest] = useState([]);

  async function syncGuests() {
    const data = await getGuests();
    setGuest(data);
  }
  // useEffect(()=>{},[]);

  useEffect(() => {
    syncGuests();
  }, []);

  return (
    <article>
      <h1>Guest List</h1>
      <ul>
        <li>
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
        </li>
        {guests.map((guest) => (
          <li key={guest.id}>
            <span>{guest.name}</span>
            <span>{guest.email}</span>
            <span>{guest.phone}</span>
          </li>
        ))}
        <p>Please select a guest to see more details</p>
      </ul>
    </article>
  );
}
