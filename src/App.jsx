import { useState } from "react"
import "./App.css"

function App() {
    const [person, setPerson] = useState({
      fullName: "Jude Bellingham",
      bio:  "He is from England. He plays as a Midfielder for real madrid.",
      imgSrc: "https://prod-media.beinsports.com/image/1696111251535_f53fafe6-816f-4e88-aafb-d992b8867849.jpg",
      profession: "Footballer"
    });
    const [shows, setShows] = useState(false);

  return (
    <>
        <div>
          {shows
          ? (<h1>Welcome here</h1>)
          :(
             <div>
                <img className=" img" src={person.imgSrc} alt={person.fullName} />
                <h4>{person.fullName}</h4>
                <p>{person.bio}</p>
              </div> 
          )
        }        
         <div>
            <button onClick={() => setShows(!shows)}>Toggle Me</button>
         </div>
        </div>
    </>
  )
}

export default App
