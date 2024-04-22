// import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { useGetAllBooksQuery } from "../store/apiSlice";
import BookCard from "./BookCard";


const Benefits = ({showAll}) => {

  const { data: books, isLoading, isError } = useGetAllBooksQuery();
  if(isLoading) {
    console.log("Loading books");
  }else if(isError) {
    console.log("Error loading books");
  }
  let allBooks=books;
  if(!showAll) {
    allBooks=books?.slice(0,6);
  }
  
  return (
    <Section id="features">
   
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Browse Our Extensive Library"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {allBooks?.map((item) => (
            <BookCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;