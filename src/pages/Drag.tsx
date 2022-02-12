import CatFacts from "../components/dragndrop/CatFacts";
import RandomUsers from "../components/dragndrop/RandomUsers";

const DragPage = () => {
  return (
    <>
      <h3>swappable list</h3>
      <CatFacts />
      <h3>swappable list with complex objects </h3>
      <RandomUsers />
    </>
  );
};
export default DragPage;
