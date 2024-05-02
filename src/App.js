import "./App.css"
import { RegularList } from "./RegularList"
import { SplitScreen } from "./SplitScreen"
import { LargePersonListItem } from "./people/LargePersonListItem"
import { SmallPersonListItem } from "./people/SmallPersonListItem"

// const LeftHandComponent = props => {
//   const { name } = props
//   return <h1 style={{ backgroundColor: "green" }}>{name}</h1>
// }
// const RightHandComponent = ({ name }) => {
//   return <p style={{ backgroundColor: "red" }}>{name}</p>
// }

const people = [
  {
    name: "Cyrus Shrestha",
    age: 27,
    hairColor: "black",
    hobbies: ["singing", "eating", "sleeping"]
  },
  {
    name: "Tanusha Ayer",
    age: 25,
    hairColor: "brown",
    hobbies: ["dancing", "reading", "roaming"]
  },
  {
    name: "Mukesh Shrestha",
    age: 37,
    hairColor: "black",
    hobbies: ["coding", "playing guitar", "cooking"]
  },
  {
    name: "Chip",
    age: 5,
    hairColor: "brown",
    hobbies: ["fixing", "inventing", "eating"]
  },
  {
    name: "Estes",
    age: 100,
    hairColor: "white",
    hobbies: ["healing", "reading", "helping"]
  },
  {
    name: "Cyclops",
    age: 1000,
    hairColor: "na",
    hobbies: ["witchcraft", "spell", "sprint"]
  }
]

function App() {
  return (
    // <SplitScreen left={LeftHandComponent} right={RightHandComponent} leftWeight={1} rightWeight={5} />

    // <SplitScreen leftWeight={1} rightWeight={5}>
    //   <LeftHandComponent name="Welcome" />
    //   <RightHandComponent name="Right Component" />
    // </SplitScreen>
    <>
      <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
      <RegularList items={people} resourceName="person" itemComponent={LargePersonListItem} />
    </>
  )
}

export default App
