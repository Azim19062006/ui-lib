import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div>
      <h1>Button Component</h1>
      <Button size="sm">Confirm</Button>
      <Button size="md">Confirm</Button>
      <Button size="lg">Confirm</Button>
      <br />
      <Button variant="bordered" size="sm">Confirm</Button>
      <Button variant="bordered" size="md">Confirm</Button>
      <Button variant="bordered" size="lg">Confirm</Button>

      <h1>Input Component</h1>

      <Input name="Name" value="Ivan Ivanov" label="Name"/>
      <Input name="Focus" value="Focus" label="Name"/>
      <Input name="Danger" value="Danger" danger label="Name"/>
    </div>
  );
}

export default App;