import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarwraper">
         <ul className="sidebarList">
            <li className="sidebarListItem">
             <RssFeedIcon className="sidebarIcon" />
             <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
             <ChatIcon className="sidebarIcon" />
             <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
             <PlayCircleIcon className="sidebarIcon" />
             <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
             <GroupIcon className="sidebarIcon" />
             <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
             <BookmarkIcon  className="sidebarIcon" />
             <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
             <QuestionAnswerIcon className="sidebarIcon" />
             <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
             <HomeWorkIcon className="sidebarIcon" />
             <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
             <EventIcon className="sidebarIcon" />
             <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
             <SchoolIcon className="sidebarIcon" />
             <span className="sidebarListItemText">Courses</span>
            </li>
         </ul>
         <button className="sidebarbutton">Show More</button>
         <hr className="sidebarhr" />
         <ul className="sidebarFriendList">
             {Users.map(u=>( <CloseFriend key={u.id} user={u} /> ))}
         </ul>
       </div>
    </div>
  )
}
