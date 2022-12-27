import "./online.css"

function Online({user} ) {
  return (
    <div>
      <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
              <img src={user.profilePicture} className="rightProfileImg" alt="" />
               <span className="rightbarOnline"> </span>
           </div>
            <span className="rightbarUsername"> {user.username}</span>
      </li>
  </div>
  )
}

export default Online