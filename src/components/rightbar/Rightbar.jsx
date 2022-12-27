import "./rightbar.css"
import{Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightWrapper">
            <div className="birthdayContainer">
                <img src="assets/birthday.jpg" className="birthdayImg" alt="Something went wrong" />
                  <span className="birthdatText">
                   <b>Neeraj</b> and <b> 3 other friends</b> have a birthday today
                  </span>
            </div>
            <img src="assets/add.jpg" className="rightbaradd" alt="image" />
            <h4 className="rightbarTitle">Online Freiends</h4>
            <ul className="rightbarFriendList">
                 {Users.map(u=> (
                    <Online user={u} key={u.id} />
                 ))}
            </ul>
        </div>
    </div>
  )
}
