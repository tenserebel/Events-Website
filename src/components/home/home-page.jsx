import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = ({ data }) => {
  return (
    <main>
      {data.map((ev) => (
        <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
          <a>
            <Image width={600} height={400} alt={ev.title} src={ev.image} />
            <h2> {ev.title} </h2>
            <p>{ev.description}</p>
          </a>
        </Link>
      ))}
    </main>
  );
};

export default HomePage;
