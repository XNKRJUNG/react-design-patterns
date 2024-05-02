import "./App.css"
import { SplitScreen } from "./SplitScreen"

const LeftHandComponent = props => {
  const { name } = props
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>
}
const RightHandComponent = ({ name }) => {
  return <p style={{ backgroundColor: "red" }}>{name}</p>
}

function App() {
  return (
    // <SplitScreen left={LeftHandComponent} right={RightHandComponent} leftWeight={1} rightWeight={5} />
    <SplitScreen leftWeight={1} rightWeight={5}>
      <LeftHandComponent name="Welcome" />
      <RightHandComponent name="Right Component" />
    </SplitScreen>
  )
}

export default App
