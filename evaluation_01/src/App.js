
import Courses from "./Components/Courses";
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";

function App() {
  return (
    <>
    <Title />
    <UserCard 
    name="Lord Krishna"
    avatar="https://thumbs.dreamstime.com/b/lord-radha-krishna-beautiful-wallpaper-163714569.jpg"
    posts={900000}
    followers={1400405}
    address="Everywhere"/>
    <Courses />
    </>
  );
}

export default App;
