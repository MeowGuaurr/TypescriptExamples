// // import { useRef } from "react";
// import Input from "./components/UI/Input.tsx";
// import Form, { type FormHandle } from "./components/UI/Form.tsx";
// import { useRef } from "react";
import AddTimer from "./components/AddTimer.tsx";
import Header from "./components/Header.tsx";
import Timers from "./components/Timers.tsx";
import TimersContextProvider from "./store/timers-context.tsx";

function App(){
  return(
  <TimersContextProvider>
  <Header/>
    <main>
      <AddTimer/>
      <Timers/>
    </main>
  </TimersContextProvider>)
}
export default App;
