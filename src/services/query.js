

const Query = `
query{
    allBooks {
      id
      name
      description  
      author {
        id
        name
        booksCount
        isFavorite
        picture
        books{
          id
          name
          cover
          description
          category
        }
      }
      cover
      category
      isFavorite  
    }
    
    favoriteBooks {
      id
      name
      cover
      author {
       id
        name
        booksCount
        isFavorite
        picture
        books{
          id
          name
          cover
          description
          category
        }
      }
      description
      isFavorite
    }
    favoriteAuthors {
      name
      id
      picture
      booksCount
      books{
         id
          name
          cover
          description
          category
      }
    }
    userPicture
  }

`
export default Query