import { useEffect, useState } from "react";

const CatFacts = () => {
  const [catfacts, setCatfacts] = useState([]);
  const [dragInfo, setDragInfo] = useState({
    data: [],
    index: 0,
    setter: (o: any) => {},
  });
  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((data) => setCatfacts(data.map((o: any) => o.text)));
  }, []);
  const handleDragStart = (e: any, index: any, data: any, setter: any) => {
    setDragInfo({ data, setter, index });
  };
  const handleDragEnter = (e: any, index: any) => {
    // const newList = [...list];
    // const item = newList[dragItem];
    // newList.splice(dragItem, 1);
    // newList.splice(index, 0, item);
    // //setDragItem(index);
    // setList(newList);
  };
  const handleDragLeave = (e: any) => {
    //e.target.style.backgroundColor = "white";
  };

  const handleDrop = (e: any, index: number, data: any, setter: any) => {
    //e.target.style.backgroundColor = "#808080";
    const item = data[index];
    const item2 = dragInfo.data[dragInfo.index];
    if (data === dragInfo.data) {
      const newList = [...data];
      [newList[index], newList[dragInfo.index]] = [
        newList[dragInfo.index],
        newList[index],
      ];
      setter(newList);
    } else {
      setter([...data.slice(0, index), item2, ...data.slice(index + 1)]);
      dragInfo.setter([
        ...dragInfo.data.slice(0, dragInfo.index),
        item,
        ...dragInfo.data.slice(dragInfo.index + 1),
      ]);
    }
  };
  return (
    <>
      <ul className="dnd">
        {catfacts &&
          catfacts.map((item, index) => (
            <li
              draggable
              key={index}
              onDragStart={(e) =>
                handleDragStart(e, index, catfacts, setCatfacts)
              }
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e) => handleDrop(e, index, catfacts, setCatfacts)}
              onDragOver={(e) => e.preventDefault()}
            >
              {item !== null ? item : "-"}
            </li>
          ))}
      </ul>
    </>
  );
};
export default CatFacts;
