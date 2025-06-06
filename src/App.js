import { useState } from "react";
import "./styles.css";

export default function App() {
 
  const[name,setName] = useState("")
  const[address, setAddress] = useState("")
  const [gender, setGender] = useState("")
  const[interests, setInterests] = useState([])
  const[color, setColor] = useState("")
  const [formData, setFormData] = useState(false)
 
  const interestsHandler = (event) => {
    let value = event.target.value
    if(event.target.value){
      setInterests([...interests, value ])
    }else{
      setInterests(interests.filter((interest) => interest != value))
    }
  }

  const formHandler = (event) => {
    event.preventDefault()
    if(name && address && gender && interests && color){
      setFormData(true)
    }
  }
  return (
    <main>
<h1>Use Profile Form</h1>
<form onSubmit={formHandler}>
<label>Name: </label>
<input onChange={(event) => setName(event.target.value)}/>
<br/>
<br/>
<label>Address:: </label>
<br/>
<textarea rows="4" cols="40" onChange={(event) => setAddress(event.target.value)}></textarea>
<br/>
<br/>
<label>Gender: </label>
<br/>
<input type="radio" value="Female" name="gender" onChange={(event) => setGender(event.target.value)}/>Female<br/>
<input type="radio" value="Male" name="gender"/>Male<br/>
<input type="radio" value="Others" name="gender"/>Others<br/><br/>

<label>Interests:</label><br/>
<input type="checkbox" value="Reading" name="interests" onChange={interestsHandler}/>{" "}Reading<br/>
<input type="checkbox" value="Singing" name="interests" onChange={interestsHandler}/>{" "}Singing<br/>
<input type="checkbox" value="Painting" name="interests" onChange={interestsHandler}/>{" "}Painting<br/><br/>

<label>Favorite Color:</label><br/>
<select onChange={(event) => setColor(event.target.value)}>
  <option value="Red">Red</option><br/>
  <option value="Blue">Blue</option><br/>
  <option value="Orange">Orange</option><br/>
</select><br/><br/>
<button type="Submit">Submit</button><br/><br/>
</form>
{formData && (<div>
  <h2>Submitted Details:</h2>
  <p>Name: {name} </p>
  <p>Address: {address}</p>
  <p>Gender: {gender}</p>
  <p>Interests: {interests.join(", ")}</p>
  <p>Favourite Color: {color}</p>
</div>)}
    </main>
  );
}
