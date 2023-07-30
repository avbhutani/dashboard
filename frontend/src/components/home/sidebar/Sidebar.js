import "./styles.css"
export default function Sidebar() {
    var date = new Date();
	var current_date ="Date: " +date.getDate()+"-"+(date.getMonth()+1)+"-" + date.getFullYear()
	var current_time = "Time: " + date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	var datetime = current_date+" "+current_time;
    return (
        <div className="sidebar_wrap">
            <div className="sidebar_user">
                Hello <span id="sidebar_username"></span>
            </div>
            <div id="sidebar_top_splitter">

            </div>
            <div id="sidebar_items">
                <ul>
                    <li>Dashboard</li>
                    <li>Pending</li>
                    <li>Recent</li>
                    <li>Profile</li>
                </ul>
                <div id="sidebar_bottom_splitter">

                </div>
            <div id="sidebar_timedatestamp">
                {datetime}
            </div>
            </div>
        </div>
    )
}