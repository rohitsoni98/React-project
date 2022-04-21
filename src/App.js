import { useState, useEffect, useMemo } from "react";
import FilterCompo from "./FilterCompo";

const App = () => {
  const [state, setState] = useState({
    list: [],
    filterValue: "",
    filterTag: "",
  });

  const filterItem = useMemo(() => {
    return state.filterValue === "" && state.filterTag === "" ? state.list :
      state.list.filter((ele) => {
        return (
          `${ele.firstName}  ${ele.lastName}`.toLowerCase().includes(state.filterValue.toLowerCase()) &&
          (state.filterTag === "" || ele.tags.find((item) => {
            console.log(' item.toLowerCase().includes(state.filterTag.toLowerCase()): ', item.toLowerCase().includes(state.filterTag.toLowerCase()));
            return item.toLowerCase().includes(state.filterTag.toLowerCase());
          }))
        )
      });
  }, [state]);

  useEffect(() => {
    const fetchData = async () => {
      let list = await fetch("https://api.hatchways.io/assessment/students")
        .then((resp) => resp.json())
        .then((itm) => {
          const result = itm.students;
          return result;
        });

      let newList = list.map((items) => {
        return { ...items, tags: [] };
      });
      setState((preState) => ({ ...preState, list: newList }));
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setState((prevState) => ({ ...prevState, filterValue: value }));
  };

  return (
    <div className="App">
      <input
        className="inputText"
        type="text"
        placeholder="Search by name"
        value={state.filterValue}
        onChange={handleChange}
      />
      <input
        className="inputText"
        type="text"
        placeholder="Search by tag"
        value={state.filterTag}
        onChange={(e) =>
          setState((preState) => ({ ...preState, filterTag: e.target.value }))
        }
      />
      {filterItem.map((element, index) => {
        return (
          <FilterCompo
            element={element}
            setState={setState}
            list={state.list}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default App;
