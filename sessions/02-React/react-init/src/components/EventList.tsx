import React from "react";
import EventCard, { Event } from "./EventCard";

type Props = { events: Event[] };

export default function EventList({ events }: Props) {
  if (!events?.length) return <p>No hay eventos por mostrar.</p>;
  return (
    <div>
      {events.map((ev) => (
        <EventCard key={ev.id} event={ev} />
      ))}
    </div>
  );
}
