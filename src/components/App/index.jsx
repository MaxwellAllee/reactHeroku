import { BrowserRouter, Route } from "react-router-dom"
import Cats from "../../Pages/Cats"
import Home from "../../Pages/Home"
import Nav from '../Nav'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Route exact path="/cats" component={Cats}/>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
    </>
  )
}
export default App;