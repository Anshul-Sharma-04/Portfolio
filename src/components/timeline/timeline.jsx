import { useEffect, useState } from "react";
import "./timeline.css";
import Miss1 from "../../asset/miss1.png";
import Miss2 from "../../asset/miss2.png";
import Miss3 from "../../asset/miss3.png";
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

  const animateToUpOnceWithScale = [
    [
      // keyframes
      { transform: "translateY(50px) scaleX(-1)" },
      { transform: "translateY(-15px) scaleX(-1)" },
    ],
    {
      // timing options
      duration: 700,
      iterations: 1,
      easing: "ease-in-out",
    },
  ];
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
      easing: "ease-in-out",
    },
  ];
  const animateToUpOnce = [
    [
      // keyframes
      { transform: "translateY(50px)" },
      { transform: "translateY(-15px)" },
    ],
    {
      // timing options
      duration: 700,
      iterations: 1,
      easing: "ease-in-out",
    },
  ];
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
      easing: "ease-in-out",
    },
  ];

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

  const selectMiss = function (miss, ifScale) {
    if (ifScale) {
      document.getElementById(miss).style.display = "block";

      document
        .getElementById(miss)
        .animate(animateToUpOnceWithScale[0], animateToUpOnceWithScale[1]);

      document
        .getElementById(miss)
        .animate(animateUpandDownWithScale[0], animateUpandDownWithScale[1]);
    } else {
      document.getElementById(miss).style.display = "block";
      document
        .getElementById(miss)
        .animate(animateToUpOnce[0], animateToUpOnce[1]);
      document
        .getElementById(miss)
        .animate(animateUpandDown[0], animateUpandDown[1]);
    }
  };

  const showdiv = function (id, marginL) {
    document.getElementById(id).style.display = "block";
    if (id === "tenth" || id === "forth") {
      // also have to add position or margin
      selectMiss("miss2", true);
    }
    if (id === "twelfth") {
      // also have to add position or margin
      selectMiss("miss1", false);
    }
    if (id === "third") {
      // also have to add position or margin
      document.getElementById("miss3").style.marginLeft = marginL;
      selectMiss("miss3", false);
    }
  };

  const hidediv = function (id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("miss1").style.display = "none";
    document.getElementById("miss2").style.display = "none";
    document.getElementById("miss3").style.display = "none";
  };

  useEffect(() => {
    async function slide() {
      const slider = await document.querySelector(".line-container");
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active1");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active1");
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active1");
      });
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
      });
    }
    slide();
  });

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
        <img src={Miss3} id="miss3" alt="miss3" style={{ display: "none" }} />

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

        <MsgBubble
          id="third"
          time="2005"
          para={[
            "3 from",
            "CBSE board in Indore",
            "WITH 101%.",
            "CBSE board in Indore",
            "WITH 101%.",
          ]}
          direction="btm-left-in"
        />

        <MsgBubble
          id="forth"
          time="2006"
          para={[
            "4 from",
            "CBSE board in Indore",
            "WITH 101%.",
            "CBSE board in Indore",
            "WITH 101%.",
          ]}
          direction="btm-right-in"
          marginL="450px"
        />

        {/*  looks left */}
        <img src={Miss2} id="miss2" alt="miss2" style={{ display: "none" }} />
      </div>

      <div className="line-container" id="hidescroll">
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
            >
              2
            </li>

            <li
              onMouseEnter={() => {
                changeFont();
                showdiv("third", "200px");
              }}
              onMouseLeave={() => {
                hidediv("third");
              }}
            >
              3
            </li>
            <li
              onMouseEnter={() => {
                changeFont();
                showdiv("forth");
              }}
              onMouseLeave={() => {
                hidediv("forth");
              }}
            >
              4
            </li>
            <li onMouseEnter={changeFont}>5</li>
            <li onMouseEnter={changeFont}>5</li>
            <li onMouseEnter={changeFont}>6</li>
            <li onMouseEnter={changeFont}>7</li>
            <li onMouseEnter={changeFont}>8</li>
            <li onMouseEnter={changeFont}>9</li>
            <li onMouseEnter={changeFont}>10</li>
          </ul>
          <img src={kang} id="kang" alt="kang" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
