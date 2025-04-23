import Link from "next/link";
import icons from "@/static_resources/icons";
export default function Activity(props: {
  type: string;
  subject: string;
  predicate: string;
  verb: string;
  time: string;
}) {
  return (
    <Link href="/" className="flex gap-4 p-4 hover:bg-gray-200 font-text">
      <div className="bg-(--warn-color) w-16 p-4 rounded-4xl h-fit">
        {icons.get(props.type)}
      </div>
      <div className="mt-2">
        <p>
          <b>{props.subject}</b> {props.verb}{" "}
          <q className="font-bold">{props.predicate}</q>
        </p>
        <p className="font-extralight italic">{props.time}</p>
      </div>
    </Link>
  );
}
