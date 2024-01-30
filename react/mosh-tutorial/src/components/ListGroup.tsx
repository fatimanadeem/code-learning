import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// function ListGroup(props: ListGroupProps) {
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // let items = ["New York", "San Franscico", "Tokyo", "London", "Paris"];
  // items = [];

  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const message = items.length == 0 ? <p>No item found</p> : null;
  const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };

  // Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            // className="list-group-item"
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={() => console.log(item)}
            // onClick={handleClick} // Not calling it, just passing reference
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item} // items in list need unique key
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
