import React from "react";

export type Event = {
  id: number | string;
  title: string;
  date?: string;
  location?: string;
  description?: string;
};

type Props = { event: Event };

export default function EventCard({ event }: Props) {
  const { title, date, location, description } = event;
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      {date && <p style={styles.meta}>{date}</p>}
      {location && <p style={styles.meta}>{location}</p>}
      {description && <p style={styles.desc}>{description}</p>}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e2e2e2",
    background: "#fff",
    marginBottom: 12,
    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
  },
  title: { margin: "0 0 6px 0" },
  meta: { margin: "0 0 4px 0", color: "#666" },
  desc: { marginTop: 6, color: "#333", lineHeight: 1.5 },
};
