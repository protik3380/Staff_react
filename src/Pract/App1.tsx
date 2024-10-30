// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import { useState } from "react";

// function App() {
//   const items = ["Bangladesh", "India", "Nepal", "USA", "Pakistan"];
//   const FoodItems = ["Muri", "Piaju", "Beguni", "vorta", "Lebu"];

//   const [showAlertVisibility, setShowAlertVisibility] = useState(false);
//   const handleSelectedItem = (item: string) => {
//       console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Countries"
//         onSelectItems={handleSelectedItem}
//       />
//       <ListGroup
//         items={FoodItems}
//         heading="Food Items"
//         onSelectItems={handleSelectedItem}
//       />
//       {showAlertVisibility && (
//         <Alert onClose={() => setShowAlertVisibility(false)}>
//           This is a primary alert—check it out!
//         </Alert>
//       )}
//       <Button color="secondary" onclick={() => setShowAlertVisibility(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// }

// export default App;
