import "./share.css"
import LabelIcon from '@mui/icons-material/Label';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
  return (
    <div className="share">
    <div className="sharewrapper">
        <div className="shareTop">
            <img src="/assets/person/1.jpg" className="shareProfileImg" alt="" />
            <input type={"text"} className="shareInput" placeholder="What's in your mind pavan" />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
           <div className="shareOptions">
            <div className="shareOption">
               <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photos or Videos</span>
            </div>
            <div className="shareOption">
               <LabelIcon htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
               <LocationOnIcon htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
               <EmojiEmotionsIcon htmlColor="gold" className="shareIcon" />
                <span className="shareOptionText">Feelings</span>
            </div>
           </div>
           <button className="shareButton" >Share</button>
        </div>
    </div>
    </div>
  )
}

export default Share