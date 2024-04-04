//import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import { Card } from "./components/Card.tsx";
import Container from "./components/Container.tsx";
import { IconButton } from "./components/IconButton.tsx";
import { HeartIcon } from "./components/IconButton.tsx";


function App(){
  return (
    <main>
       <Card
        title="My Card"
        actions={
          <button onClick={() => console.log('Button clicked!')}>
            Click Me!
          </button>
        }
        >
        <p>Some content</p>
        <IconButton icon={HeartIcon} onClick={() => console.log('Button clicked!')}>
        Like
      </IconButton>
      </Card>

      <Container as={Button}>
        Click me I'm a button component!
      </Container>

    </main>


  )
}
export default App;
