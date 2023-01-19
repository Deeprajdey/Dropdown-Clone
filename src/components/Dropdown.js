import React, { useEffect, useRef, useState } from "react";
import "./Dropdown.css";
const Dropdown = (prop) => {
  const [search, setSearch] = useState("");
  const [lists, setLists] = useState(prop.lists);
  const [values, setValues] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
    const filteredList = prop.lists.filter((itm) => {
      return itm.label.includes(e.target.value);
    });
    setLists(filteredList);
  };
  const handleClick = (index) => {
    setValues([...values, lists[index]]);
    // setSearch(lists[index].label);
    // setSearch("");
    const filteredList = lists.filter((itm, i) => i !== index);
    setLists(filteredList);
  };
  return (
    <div className="myDropdown">
      <h1>Dropdown</h1>
      <input type="text" value={search} onChange={handleChange} />
      {search !== "" && (
        <div className="box">
          {lists.map((list, i) => {
            return (
              <li key={i} onClick={() => handleClick(i)}>
                {`${list.label}   ${list.value}`}
              </li>
            );
          })}
        </div>
      )}
      <div>
        {values.map((value, i) => {
          return (
            <span key={i}>
              {value.label}
              {value.value}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
