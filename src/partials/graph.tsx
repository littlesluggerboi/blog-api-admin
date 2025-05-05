"use client";
import { GraphData } from "@/app/lib/definitions";
import dynamic from "next/dynamic";
import {
  Legend,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChart = dynamic(
  () => import("recharts").then((recharts) => recharts.LineChart),
  {
    ssr: false,
  }
);


export default function Graph(props: { data: GraphData[] | string }) {
  return (
    <div className="bg-white p-8 mt-8 rounded-sm text-sm font-text">
      <h1 className="font-bold text-2xl mb-8 text-center text-gray-500">
        Published Posts
      </h1>
      {typeof props.data == "string" ? (
        <h2 className="flex justify-center items-center text-xl text-red-500">
          Data {props.data}
        </h2>
      ) : (
        <LineChart
          width={900}
          height={400}
          data={props.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <Line type="monotone" dataKey="published" stroke="#8884d8" />
        </LineChart>
      )}
    </div>
  );
}
