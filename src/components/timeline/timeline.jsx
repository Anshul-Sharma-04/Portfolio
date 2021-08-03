import { useState } from "react";
import "./timeline.css";
import Miss1 from "../../asset/miss1.png";
import Miss2 from "../../asset/miss2.png";
import MsgBubble from "../msgbubble/msgbubble";
import kang from "../../asset/kang.png";
const f = [
  "check check1",
  "check check2",
  "check check3",
  "check check4",
  "check check5",
];
const Timeline = function () {
  const [fonts, setFonts] = useState(f);

  const animateToUpOnceWithScale = [[
    // keyframes
    { transform: "translateY(50px) scaleX(-1)" },
    { transform: "translateY(-15px) scaleX(-1)" }
  ],{
    // timing options
    duration: 700,
    iterations: 1,
    easing: "ease-in-out"
  }]
  const animateUpandDownWithScale = [
    [
      // keyframes
      { transform: "translateY(-15px) scaleX(-1)" },
      { transform: "translateY(0px) scaleX(-1)" },
      { transform: "translateY(-15px) scaleX(-1)" },
    ],
    {
      // timing options
      duration: 1500,
      iterations: Infinity,
      delay: 700,
      easing: "ease-in-out"
    }
  ]
  const animateToUpOnce = [[
    // keyframes
    { transform: "translateY(50px)" },
    { transform: "translateY(-15px)" }
  ],{
    // timing options
    duration: 700,
    iterations: 1,
    easing: "ease-in-out"
  }]
  const animateUpandDown = [
    [
      // keyframes
      { transform: "translateY(-15px)" },
      { transform: "translateY(0px)" },
      { transform: "translateY(-15px)" },
    ],
    {
      // timing options
      duration: 1500,
      iterations: Infinity,
      delay: 700,
      easing: "ease-in-out"
    }
  ]

  const changeFont = function () {
    let arr = fonts;
    let temp = arr[0];
    for (let i = 0; i < 4; i++) {
      arr[i] = arr[i + 1];
    }
    arr[4] = temp;
    // setFonts(arr);
    setFonts(Array.from(arr));
  };

  const showdiv = function (id) {
    document.getElementById(id).style.display = "block";
    if (id === "twelfth") {
      // also have to add position or margin
      document.getElementById("miss1").style.display = "block";
      
      document.getElementById("miss1").animate(
        animateToUpOnce[0],animateToUpOnce[1]
      );
      
      document.getElementById("miss1").animate(
        animateUpandDown[0],animateUpandDown[1]
      );

    }
    if (id === "tenth") {
      // also have to add position or margin
      document.getElementById("miss2").style.display = "block";

      document.getElementById("miss2").animate(
        animateToUpOnceWithScale[0],animateToUpOnceWithScale[1]
      );
      
      document.getElementById("miss2").animate(
        animateUpandDownWithScale[0],animateUpandDownWithScale[1]
      );

    }
  };

  const hidediv = function (id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("miss1").style.display = "none";
    document.getElementById("miss2").style.display = "none";
  };

  return (
    <div className="timeline">
      <h1>
        <font className={fonts[0]}>M</font>
        <font className={fonts[1]}>Y </font>
        &nbsp;
        <font className={fonts[2]}>T</font>
        <font className={fonts[3]}>I</font>
        <font className={fonts[4]}>M</font>
        <font className={fonts[0]}>E</font>
        <font className={fonts[1]}>L</font>
        <font className={fonts[2]}>I</font>
        <font className={fonts[3]}>N</font>
        <font className={fonts[4]}>E</font>
      </h1>

      <div className="time-events">
        {/*  looks right */}
        <img src={Miss1} id="miss1" alt="miss1" style={{ display: "none" }} />

        <MsgBubble
          id="tenth"
          time="2015"
          para={["10th from", "CBSE board in Indore", "WITH -80%."]}
          direction="btm-right-in"
        />

        <MsgBubble
          id="twelfth"
          time="2017"
          para={["10+2 from", "CBSE board in Indore", "WITH 101%."]}
          direction="btm-left-in"
        />

        {/*  looks right */}
        <img src={Miss2} id="miss2" alt="miss2" style={{ display: "none" }} />
      </div>

      <div className="line-container">
        <div className="line-div">
          <ul>
            <li
              onMouseEnter={() => {
                changeFont();
                showdiv("tenth");
              }}
              onMouseLeave={() => {
                hidediv("tenth");
              }}
              id="time-tenth"
            >
              1
            </li>

            <li
              onMouseEnter={() => {
                changeFont();
                showdiv("twelfth");
              }}
              onMouseLeave={() => {
                hidediv("twelfth");
              }}
              id="time-twelfth"
            >
              2
            </li>

            <li onMouseEnter={changeFont}>3</li>
            <li onMouseEnter={changeFont}>4</li>
            <li onMouseEnter={changeFont}>5</li>
            <li onMouseEnter={changeFont}>5</li>
            <li onMouseEnter={changeFont}>6</li>
            <li onMouseEnter={changeFont}>7</li>
            <li onMouseEnter={changeFont}>8</li>
          </ul>
          <img src={kang} id="kang" alt="kang" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
