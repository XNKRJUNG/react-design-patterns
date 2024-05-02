import "./App.css"
import { NumberedList } from "./NumberedList"
import { RegularList } from "./RegularList"
// import { SplitScreen } from "./SplitScreen"
import { LargePersonListItem } from "./people/LargePersonListItem"
import { SmallPersonListItem } from "./people/SmallPersonListItem"
import { LargeProductListItem } from "./products/LargeProductListItem"
import { SmallProductListItem } from "./products/SmallProductListItem"

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

const product = [
  {
    name: "iPad",
    price: 1200,
    description: "All new M4 chip inside, iPad Pro is the best in any tablet lineup. Try one now.",
    rating: 4.5
  },
  {
    name: "Yoda Cap",
    price: 6,
    description: "Sale, before it was $12 now it's half the price. May the force be with you",
    rating: 3.9
  },
  {
    name: "Samsung A52s",
    price: 250,
    description: "5 years old phone. But it still goes brrrrrrrrr. I mean it works with a cracked screen.",
    rating: 3.5
  },
  {
    name: "Asus Zephryus M15",
    price: 2100,
    description: "I don't remember the model nor the how Zephrusis is spelled. XD Has a fan NOISE whoossssshh",
    rating: 3.0
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
      <NumberedList items={people} resourceName="person" itemComponent={LargePersonListItem} />
      <RegularList items={product} resourceName="product" itemComponent={SmallProductListItem} />
      <NumberedList items={product} resourceName="product" itemComponent={LargeProductListItem} />
    </>
  )
}

export default App
