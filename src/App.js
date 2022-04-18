import { useState, useEffect, useMemo } from "react";
import FilterCompo from "./FilterCompo";

const App = () => {
  const [item, setItem] = useState({
    list: [],
    filterValue: "",
    filterTag: "",
    isBtn: false,
    showTest: true
  });


  const filterItem = useMemo(() => {
    return item.list.filter((ele) => {
      if (item.filterValue === "") {
        return ele;
      } else if (
        ele.firstName.toLowerCase().includes(item.filterValue.toLowerCase()) ||
        ele.email.toLowerCase().includes(item.filterValue.toLowerCase()) ||
        ele.company.toLowerCase().includes(item.filterValue.toLowerCase()) ||
        ele.skill.toLowerCase().includes(item.filterValue.toLowerCase())
      ) {
        return ele;
      }
    })
  }, [item, item.filterValue])

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.hatchways.io/assessment/students")
        .then((resp) => resp.json())
        .then((itm) => {
          setItem((prevState) => ({ ...prevState, list: itm.students }));
        });
    };
    fetchData();
  }, []);


  const handleChange = (e) => {
    const value = e.target.value;
    setItem((prevState) => ({ ...prevState, filterValue: value }))
  }



  return (
    <div className="App">
      <input
        className="inputText"
        type="text"
        placeholder="Search by name"
        value={item.filterValue}
        onChange={handleChange}
      />
      {
        filterItem.map((element, index) => {
          return (
            <FilterCompo
              element={element}
              setItem={setItem}
              item={item}
              list={item.list}
              key={index}
            />
          )
        })
      }
    </div>
  );
};

export default App;

