import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Franscico", "Tokyo", "London", "Paris"];
  let coloursList = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  const [colourIndex, setcolourIndex] = useState(0);
  const [alertVisible, setAlertVisibility] = useState(true);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleColor = () => {
    colourIndex === coloursList.length - 1
      ? setcolourIndex(0)
      : setcolourIndex(colourIndex + 1);
  };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> My Alert</Alert>
      )}
      <Button
        colour={coloursList[colourIndex]}
        onClick={() => {
          handleColor();
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
