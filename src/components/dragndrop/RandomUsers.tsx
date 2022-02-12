import { useEffect, useState } from "react";

const RandomUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [VIPUser, setVIPUser] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  const [dragInfo, setDragInfo] = useState({
    data: [],
    index: 0,
    setter: (o: any) => {},
  });

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
      <button
        onClick={() => {
          setIsLoading(true);
          fetch("https://randomuser.me/api/?results=8")
            .then((res) => res.json())
            .then((data) => {
              setUsers(data.results);
              setIsLoading(false);
            });
        }}
        disabled={isLoading}
      >
        refresh
      </button>
      <ul className="dnd" style={{ display: "flex", flexDirection: "column" }}>
        {users &&
          users.map((item, index) => (
            <li
              draggable
              key={index}
              onDragStart={(e) => handleDragStart(e, index, users, setUsers)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e) => handleDrop(e, index, users, setUsers)}
              onDragOver={(e) => e.preventDefault()}
            >
              {item !== null ? item.name.first + " " + item.name.last : "-"}
            </li>
          ))}
        <hr />
        <li
          style={{ listStyle: "none", display: "flex" }}
          onDrop={(e) => setVIPUser(dragInfo.data[dragInfo.index])}
          onDragOver={(e) => e.preventDefault()}
        >
          {!VIPUser ? (
            <div style={{ border: "1px solid black" }}>
              drag & drop a User on me!
            </div>
          ) : (
            <div style={{ border: "1px solid black" }}>
              {"Name: " +
                VIPUser.name.title +
                " " +
                VIPUser.name.first +
                " " +
                VIPUser.name.last}
              <br />
              {"Phone: " + VIPUser.phone}
              <br />
              <img src={VIPUser.picture.medium} alt="pic of random user" />
            </div>
          )}
        </li>
      </ul>
    </>
  );
};
export default RandomUsers;
