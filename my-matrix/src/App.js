import React, { useState, useEffect } from "react";
import "./App.css";

const boxArray1 = [
  {
    id: 1,
    title: "Box 1",
    clicked: false,
  },
  {
    id: 2,
    title: "Box 2",
    clicked: false,
  },
  {
    id: 3,
    title: "Box 3",
    clicked: false,
  },
  {
    id: 4,
    title: "Box 4",
    clicked: false,
  },
  {
    id: 5,
    title: "Box 5",
    clicked: false,
  },
  {
    id: 6,
    title: "Box 6",
    clicked: false,
  },
  {
    id: 7,
    title: "Box 7",
    clicked: false,
  },
  {
    id: 8,
    title: "Box 8",
    clicked: false,
  },
  {
    id: 9,
    title: "Box 9",
    clicked: false,
  },
  {
    id: 10,
    title: "Box 10",
    clicked: false,
  },
  {
    id: 11,
    title: "Box 11",
    clicked: false,
  },
  {
    id: 12,
    title: "Box 12",
    clicked: false,
  },
  {
    id: 13,
    title: "Box 13",
    clicked: false,
  },
  {
    id: 14,
    title: "Box 14",
    clicked: false,
  },
  {
    id: 15,
    title: "Box 15",
    clicked: false,
  },
  {
    id: 16,
    title: "Box 16",
    clicked: false,
  },
];

let tempArray = [];

function App() {
  const [boxArray, setBoxArray] = useState(boxArray1);

  useEffect(() => {
    tempArray = [];
  }, []);

  const onChangeHandler = (boxObj) => {
    tempArray.push(boxObj.id);
    const newBoxArray = boxArray.map((box) => {
      if (tempArray.length === 3) {
        if (tempArray[0] === box.id) {
          tempArray.shift();
          return {
            ...box,
            clicked: !box.clicked,
          };
        }
      }

      if (box.id === boxObj.id) {
        return {
          ...box,
          clicked: !box.clicked,
        };
      } else {
        return box;
      }
    });

    setBoxArray(newBoxArray);
  };

  return (
    <div class="grid-demo demo-5">
      {boxArray.length &&
        boxArray.map((box) => {
          return (
            <div
              className={box.clicked ? "box-dynamic" : `box box-${box.id}`}
              key={box.id}
              onClick={() => onChangeHandler(box)}
            >
              <h1 class="child-title">{box.clicked ? box.title : "click"}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default App;
