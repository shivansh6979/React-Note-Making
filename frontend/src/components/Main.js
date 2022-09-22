import React, { useEffect, useState } from "react";

const Main = () => {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState("");
  const [select, setSelected] = useState(null);

  const handleClick = (e, index) => {
    e.preventDefault();
    if (index !== select) {
      setSelected(index);
      setVisible((current) => !current);
    }
  };

  useEffect(() => {
    console.log("ddd", update);
  }, [update]);

  const handleUpdate = (e, index) => {
    e.preventDefault();
    const copydata = [...list];
    copydata[index] = update;
    setList(copydata);

    setVisible(false);
    console.log("dhjsh", index);
    console.log("dataaaaaa", list);
  };

  const onAdd = (e) => {
    e.preventDefault();
    const copydata = [...list];
    copydata.push(todo);
    setList(copydata);
    console.log("items of copydata", copydata);
  };

  const onDelete = (e, index) => {
    e.preventDefault();
    const replicaData = [...list];
    if (index !== -1) {
      replicaData.splice(index, 1);
    }
    console.log("item removed");
    setList(replicaData);
  };

  useEffect(() => {
    console.log("items of list", list);
  }, [list]);

  return (
    <div>
      <form className="main-form" onSubmit={(e) => onAdd(e, todo)}>
        <input
          placeholder=" Start making notes..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Make a Note</button>
      </form>
      {list.map((listItem, index) => {
        return (
          <form key={index} className="tile">
            <h3>
              {index + 1}. {listItem}
            </h3>
            <div className="main-buttons">
              <button onClick={(e) => handleClick(e, index)}>Update</button>
              {index === select && visible && (
                <div className="update">
                  <input
                    placeholder="Enter the changes..."
                    onChange={(e) => setUpdate(e.target.value)}
                  />
                  <button
                    onClick={(e) => {
                      handleUpdate(e, index);
                    }}
                  >
                    Submit update
                  </button>
                </div>
              )}
              <button onClick={(e) => onDelete(e, todo, index)}>Remove</button>
            </div>
          </form>
        );
      })}
    </div>
  );
};

export default Main;
