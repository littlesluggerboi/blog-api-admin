import Link from "next/link";
import icons from "@/static_resources/icons";
import { Event } from "@/app/lib/definitions";
export default function Activity(props: { event: Event }) {
  return (
    <Link href={`/posts/${props.event.post_id}`} className="flex gap-4 p-4 hover:bg-gray-200 font-text">
      <div className={(props.event.verb.includes("edit") ? "bg-amber-300" : "bg-green-300") + " w-12 p-3 rounded-4xl h-fit"}>
        {icons.get(props.event.type)}
      </div>
      <div className="mt-2 text-sm">
        <p>
          <b>{props.event.subject}</b> {props.event.verb}{" "}
          <q className="font-bold">{props.event.predicate}</q>
        </p>
        <p className="font-extralight italic">{props.event.time}</p>
      </div>
    </Link>
  );
}
