import { Event } from "@/app/lib/definitions";
import Activity from "./activity";

export default function RecentActivities(props: {
  recent_activities: Event[] | string;
}) {
  return (
    <div className="bg-white max-w-sm rounded-sm h-fit">
      <h4 className="font-text font-medium text-xl text-(--light-color) py-8 px-4 border-b border-gray-200">
        Recent Activities
      </h4>
      <div className="">
        {typeof props.recent_activities == "string" ? (
          <h1 className="text-center p-8 text-2xl text-red-600 font-bold font-heading">
            {props.recent_activities}
          </h1>
        ) : props.recent_activities.length == 0 ? (
          <p className="font-text p-8">No Recent Activities</p>
        ) : (
         props.recent_activities.map((val, index)=>{
            return <Activity key={index} event={val}/>
         })   
        )}
      </div>
    </div>
  );
}
