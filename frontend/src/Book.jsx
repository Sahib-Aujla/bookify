import { useGetBookQuery } from "./store/apiSlice";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import GetBookCard from "./components/GetBookCard";

const Book = () => {
  const params = useParams();
  const{id}=params;
  const { data: book, isLoading, isError } = useGetBookQuery(id);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <h1>Loading books...</h1>
      </div>
    );
  } else if (isError) {
    <div className="flex items-center justify-center">
      <h1>Please try again later.</h1>
    </div>;
  }
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.35rem] overflow-hidden">
        <Header></Header>
      </div>

      <GetBookCard id={id} />
    </>
  );
};

export default Book;
