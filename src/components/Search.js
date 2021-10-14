import React from "react";
import { FaSistrix } from "react-icons/fa";
import Show from "./Show";
import Service from "./service";


const Search = (props) => {
  const goBack = () => {
    props.history.push("/");
  };
  const [state, setState] = React.useState(
    props.location.state ? props.location.state : ""
  );
  const [rlimit, setrlimit] = React.useState(
    props.location.rlimit ? props.location.rlimit : 10
  );
  const [model, setmodel] = React.useState(
    props.location.model ? props.location.model : "mpnet"
  );
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = React.useState("");
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

  const onChangeModel = (e) => {
    const model = e.target.value;
    console.log(model);
    setmodel(model);
    searchGoogle(e);
  };
  const onChangeResultLimit = (e) => {
    const rlimit = e.target.value;
    console.log(rlimit);
    setrlimit(rlimit);
    searchGoogle(e);

  }
  const searchGoogle = async (e) => {
    e.preventDefault();
    try{
    const response = await Service.search(state,rlimit,model);
    console.log(response);
    if (response) {
          setResults(response.data.results);
          setInfo(response.data);
        }
    }catch (error) {
      console.log(error);
    }
    
  };
  React.useEffect(() => {
    async function getPosts() {
      if (props.location.state) {
        try {
          const response = await Service.search(state,rlimit,model);
          console.log(response);

          if (response) {
            setResults(response.data.results);
            setInfo(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getPosts();
  }, []);
  return (
    <div className="search">
      <div className="search__form">
        <div className="search__form-logo">
          <img src="/images/HeHealth_H.png" alt="logo" onClick={goBack}  height="50%" width="60%"  />
        </div>
        <div className="search__form-input">
          <form className="home__form" onSubmit={searchGoogle}>
            <input
              type="text"
              className="home__input"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

            <FaSistrix className="search__icon" />

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
          </form>
        </div>
      </div>
      <Show results={results} info={info} />
    </div>
  );
};

export default Search;
