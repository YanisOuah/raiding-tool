import CatFacts from "../components/dragndrop/CatFacts";
import BookTitles from "../components/dragndrop/BookTitles";

const DragPage = () => {
  return (
    <>
      <h3>swappable list</h3>
      <CatFacts />
      <h3>swappable list with complex objects </h3>
      <BookTitles />
    </>
  );
};
export default DragPage;
