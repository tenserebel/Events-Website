import AllEvents from "@/components/events/events-page";
import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return <AllEvents data={data} />;
};
export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
