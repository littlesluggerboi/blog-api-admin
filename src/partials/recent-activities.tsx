import Activity from "./activity";

export default function RecentActivities(){
    return <div className="bg-white max-w-sm rounded-sm">
        <h4 className="font-text font-medium text-xl text-(--light-color) py-8 px-4 border-b border-gray-200">Recent Activities</h4>
        <div className="">
            <Activity type="comment" subject="User" verb="Commented on" predicate="The way of the living" time="20 mins ago"/>
            <Activity type="user" subject="User" verb="Commented on" predicate="The way of the living" time="20 mins ago"/>
            <Activity type="post" subject="User" verb="Commented on" predicate="The way of the living" time="20 mins ago"/>
            <Activity type="comment" subject="User" verb="Commented on" predicate="The way of the living" time="20 mins ago"/>
            <Activity type="user" subject="User" verb="Commented on" predicate="The way of the living" time="20 mins ago"/>
        </div>
    </div>
}