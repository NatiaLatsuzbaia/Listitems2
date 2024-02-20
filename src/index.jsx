import React from "react";
import  ReactDOM from "react-dom/client";
import ListItems from "./list";

function App(){
    return(
        <React.Fragment>
            <ListItems fruits = {[ "apple", "banana", "orange", "grape", "kiwi"]}  />
        </React.Fragment>

    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
export default App;
