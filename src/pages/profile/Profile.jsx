import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"

import "./profile.css"

// import Topbar from '../../components/topbar/Topbar'


export default function Profile() {
  return (
    <div>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
        <img src="assets/mountain.jpg" alt="mountain" className="profileCoverImg" />
        <img src="assets/pavan.jpg" alt="mountain" className="profileUserImg" />          
        </div>
       <div className="profileInfo">
        <h4 className="profileInfoName">Pavan Kumar </h4>
        <span className="profileInfoDesc">React Developer</span>
       </div>
          </div>
         <div className="profileRightBottom">
         <Feed/>
         <Rightbar/>
         </div>
    </div>
    </div>
  </div>
  )
}
