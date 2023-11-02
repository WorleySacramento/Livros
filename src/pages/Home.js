import Lupa from '../components/icons/lupa';
import Avatar from '../components/icons/avatar';
import '../../src/App.css';
import Add from '../components/icons/add';
import Favorito from '../components/icons/favorito';
import Logo from '../components/icons/logo';
import { useQuery } from '../services/Api';
import { SWRConfig } from 'swr';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useMemo } from 'react';
// import FavBooks from './favBooks';
// import FavAuthors from './favAuthor';
// import AllBooks from './allBooks';
// import NavBar from './navbar'
import Query from '../services/query';

// const history = createBrowserHistory({
//   basename: "/"
// })
// window.redirect = history.push




function Home() {
  const {book} = useQuery(Query)
  console.log(book, 'aqui esse role')
    
  const books = useMemo()

//   const favoriteBooks = showFavoriteBooks();
//   function showFavoriteBooks(books) {
//     return books.filter(book => book.isFavorite);
//   }
// function showUserPicture(userPicture);
const categories = 
{
    TECHNOLOGY: 'Tecnologia',
    TRAVEL: 'Viagem',
    HORROR: 'Terror',
    ADVENTURE: 'Aventura',
    COMEDY: 'Comédia',
    ROMANCE: 'Romance',
  };
  const booksByCategory = {};

//   data.data.allBooks.forEach(book => {
//     if (!booksByCategory[book.category]) {
//       booksByCategory[book.category] = [];
//     }
  
//     booksByCategory[book.category].push(book);
//   });

// function handleBookClick(bookId) {
  
// }
  
  return (
    <div style={{width: '100%', height: '100vh', position: 'relative', background: '#F7F7F7'}}>

    <div style={{width: 1140, height: 720, left: 1280, top: 1240, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', background: 'white', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.10)', borderBottomRightRadius: 32}}>       
    </div>
    
    <div style={{height: 461, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
       {/* <AllBooks/> */}
    </div>

    <div style={{left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
    {/* <FavAuthors/> */}
    </div>

    <div style={{left: 17, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex',width: 936, }}>    
        {/* <FavBooks/> */}
    </div>

          <div style={{ width: 1140, height: 72, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.20)', borderBottomRightRadius: 32 }} />
          <div style={{ width: 1140, height: 72, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.20)', borderBottomRightRadius: 32 }} >
          {/* <NavBar/> */}
          </div>
          
          <div style={{gap:24, width: 1140, height: 48, position: 'relative', top: 80, left: 172, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
              <div style={{ width: 103, height: 48, position: 'relative' }}>
                  <div style={{ width: 94, height: 4, left: 0, top: 40, position: 'absolute', background: '#A076F2', borderTopLeftRadius: 2, borderTopRightRadius: 2 }} />
                  <div style={{ left: 10, top: 16, position: 'absolute', textAlign: 'center', color: '#555555', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Meus livros</div>
              </div>
              <div style={{ width: 103, height: 48, position: 'relative' }}>
                  <div style={{ left: 0, top: 16, position: 'absolute', textAlign: 'center', color: '#555555', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Emprestados</div>
              </div>
          </div>


        

    {/* <div style={{width:'100%', height: 0, left: 172, top: 145, position: 'absolute', border: '1px #E7E7E7 solid'}}></div> */}
    <div style={{width:1175, paddingLeft: 172, paddingRight: 172, paddingTop: 16, paddingBottom: 16, left: 0, top: 1240, position: 'absolute', background: '#A076F2', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{flex: '1 1 0', alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{width: 76.90, paddingTop: 10, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{width: 76.90, height: 23.76, background: 'white'}}></div>
            </div>
            <div style={{textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Todos os direitos reservados.<br/>Studio Sol Books © 2023 </div>
        </div>
    </div>

</div>

  );
}



export default Home;


