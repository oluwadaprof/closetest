import "./test.css";
import { Fragment, useState } from "react";

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

const List = ({ items, index }) => {
  const [colors, setColors] = useState(
    items.map((i) => ({ ...i, selected: false }))
  );

  const handleClick = (index) => {
    console.log(index);
    const updatedColors = [...colors];
    const itemToUpdate = updatedColors[index];
    updatedColors[index] = {
      ...itemToUpdate,
      selected: !itemToUpdate.selected,
    };

    setColors(updatedColors);
   
  };

  return (
    <Fragment>
      <ul className="List-Style" >{colors.map((item) =>
      ( item.selected && <li>{item.name}</li>)
      
      )}</ul>

      <ul className="List">
        {colors.map((item, index) => (
          <li
            key={item.name}
            className={`List__item List__item--${item.color}`}
            style={{ border: item.selected ? "10px solid red" : "none" }}
            onClick={() => handleClick(index)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

function Test() {
  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default Test;
// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ["tiny", "small", "medium", "large", "huge"];
const colors = [
  "navy",
  "blue",
  "aqua",
  "teal",
  "olive",
  "green",
  "lime",
  "yellow",
  "orange",
  "red",
  "maroon",
  "fuchsia",
  "purple",
  "silver",
  "gray",
  "black",
];
const fruits = [
  "apple",
  "banana",
  "watermelon",
  "orange",
  "peach",
  "tangerine",
  "pear",
  "kiwi",
  "mango",
  "pineapple",
];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          []
        ),
      ],
      []
    ),
  ],
  []
);
