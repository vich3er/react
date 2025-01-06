import './App.css'
import FamilyComponent from "./components/FamilyComponent.tsx";
import CharacterComponent from "./components/CharacterComponent.tsx";
import {simpsons} from "./data/simpsons.ts";


function App() {

  return (
      <>
<FamilyComponent/>
          <CharacterComponent character={simpsons[0]}></CharacterComponent>
      </>
  )
}

export default App
