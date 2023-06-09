import SingleEvent from "@/components/events/single-events";
import Image from "next/image";

const EventPage = ({ data }) => <SingleEvent data={data} />;

export default EventPage;

export async function getStaticPaths() {
  const data = await import("../../../data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("../../../data/data.json");
  const eventData = allEvents.find((ev) => ev.id === id);
  return {
    props: { data: eventData },
  };
}
