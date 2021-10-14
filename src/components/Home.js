import React from "react";
import { FaSistrix } from "react-icons/fa";
const Home = (props) => {
  const [state, setState] = React.useState("");
  const [rlimit, setrlimit] = React.useState(10);
  const [model, setmodel] = React.useState("mpnet");
  const option = [
    {
      label : "pre-trained model 1",
      value : "mpnet"
    },
    {
      label : "pre-trained model 2",
      value : "minilm"
    },
  ];
  const option2 = [
    {
      label : "10",
      value : 10
    },
    {
      label : "20",
      value : 20
    },
    {
      label : "30",
      value : 30
    },
    {
      label : "40",
      value : 40
    },
    {
      label : "50",
      value : 50
    },
  ];
  const searchGoogle = (e) => {
    props.history.push({ pathname: "/search", state, model,rlimit });
  };

  const onChangeModel = (e) => {
    const model = e.target.value;
    console.log(model);
    setmodel(model);
  };
  const onChangeResultLimit = (e) => {
    const rlimit = e.target.value;
    console.log(rlimit);
    setrlimit(rlimit);
  }
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__logo">
          <img src="/images/HeHealth_H.png" alt="Logo" height="50%" width="70%" />
        </div>
        <form className="home__form" onSubmit={searchGoogle}>
          <input
            type="text"
            className="home__input"
            onChange={(e) => setState(e.target.value)}
            value={state}
            required
          />
          <label className="" htmlFor="Model">Model</label>
            <select
              value={model}
              onChange = {onChangeModel} 
            >
              {option.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          
          <label className="" htmlFor="ResultsLimit">No. of Results</label>
            <select
              value={rlimit}
              onChange = {onChangeResultLimit} 
            >
              {option2.map((option2) => (
                <option value={option2.value}>{option2.label}</option>
              ))}
            </select>
            
          <FaSistrix className="search__icon" />
        </form>
      </div>
    </div>
  );
};

export default Home;
