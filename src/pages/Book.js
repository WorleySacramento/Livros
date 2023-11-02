import React, { useState } from "react";
import { useQuery } from './services/Api';
import { useParams } from "react-router-dom";

const Query = `
query{
    allBooks {
        name
        description
        author{
          name
        }
        cover
        category
        isFavorite
        
      }
        favoriteBooks {
          name
          cover
          author{
            name
          }
          description
          isFavorite
        }
      favoriteAuthors {
        name
        id
        picture
        booksCount
        
      }
             userPicture
  }

`
const Book = () => {
  const {data} = useQuery(Query)
  const {id} = useParams()
//   const [isOpen, setIsOpen] = useState(false);

//   const openBookDetailsPage = () => {
//     setIsOpen(true);
//     window.open(`/books/${book.id}`, "BookDetails");
//   };

//   if (!isOpen) {
//     return (
//       <button onClick={openBookDetailsPage}>View Book Details</button>
//     );
//   }

  return (
    <div>
      <h1>{data.allbooks}</h1>
      <img src={data.data.allbooks.cover} />
      <p>{data.data.allbooks.description}</p>
    </div>
  );
};

export default Book;









// export default function Book() {
  
//     return (
//         <div>
//           {data?.data?.allBooks.map((book) => (
//             <div key={book.id}>
//               <BookDetails book={book} />
//             </div>
//           ))}
//         </div>
//       );
//     }
