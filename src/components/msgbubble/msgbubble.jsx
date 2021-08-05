import HourglassFullTwoToneIcon from "@material-ui/icons/HourglassFullTwoTone";
import "./msgbubble.css";
const MsgBubble = function (props) {
  return (
    <div
      className={`talk-bubble tri-right border ${props.direction} `}
      id={props.id}
      style={{ display: "none", marginLeft:props.marginL }}
    >
      <div className="talktext">
        <p
          className="msg"
          style={{ marginBottom: "10px", fontSize: "x-large" }}
        >
          <HourglassFullTwoToneIcon></HourglassFullTwoToneIcon>
          <b>{props.time}</b>
        </p>
        {props.para.map((data, index) => {
          return (
            <p className="msg" key={index}>
              {data}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MsgBubble;
