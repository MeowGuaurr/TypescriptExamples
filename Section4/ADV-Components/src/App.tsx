// import { useRef } from "react";
import Input from "./components/Input.tsx";
import Form, { type FormHandle } from "./components/Form";
import { useRef } from "react";

function App(){
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string, age: string};
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name"/>
        <Input type="number" label="Age" id="age"/>
        <p>
          <button>Save</button>
        </p>
      </Form>
    </main>
  )
}
export default App;
