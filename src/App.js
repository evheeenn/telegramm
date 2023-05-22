import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Form2 from "./components/Form2";

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className={"formsWrapper container-fluid"}>
        <div className={"login"}>
          <Form 
          h1={"Secure Sign In"} 
          h4={"For current customers"} />
        </div>
        <div className={"registration"}>
          <Form2 
          h1={"Quick Registration"} 
          h4={"For new customers"} />
        </div>
      </div>
    </div>
  );
}

export default App;
