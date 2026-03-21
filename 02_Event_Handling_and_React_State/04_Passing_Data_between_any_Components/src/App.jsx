import Event1 from './eventHandling/Event1'
import Event2 from './eventHandling/Event2'
import StatesIntro from './IntroToStates/StatesIntro'
import StateSnapShot from './stateSnapShot/StateSnapShot'
import Parent from './passingData/01_Parent_to_Child/Parent'
import ParentCtoP from './passingData/02_Children_to_Parent/ParentCtoP'
import ParentAB from './passingData/03_Childern_to_Sibling/ParentAB'

const App = () => {
    return <ParentAB />
}

export default App