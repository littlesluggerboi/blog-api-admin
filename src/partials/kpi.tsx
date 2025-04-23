export default function Kpi(props: { label: string; value: number }) {
  return (
    <div className="bg-white p-8 rounded-xl font-text w-3xs">
      <p className="text-gray-500">{props.label}</p>
      <h1 className="font-bold text-2xl">{props.value}</h1>
    </div>
  );
}
