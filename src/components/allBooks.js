import Query from "../services/query";
import { useQuery } from '../services/Api';
import React,{useState} from 'react'



const categories = 
{
    TECHNOLOGY: 'Tecnologia',
    TRAVEL: 'Viagem',
    HORROR: 'Terror',
    ADVENTURE: 'Aventura',
    COMEDY: 'Comédia',
    ROMANCE: 'Romance',
  };




export default function AllBooks(params) {
    const [books, setBooks] = useState([])
    const {data}= useQuery(Query)

    function openBookDetailsPage() {
        // setIsOpen(true);
        window.open(`./pages/Book.js`);
        console.log(data.data.allBooks.id, 'euuu')
      };


    return(
         <div style={{height: 461, left: 172, top: 690, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', color: '#555555', fontSize: 28, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Biblioteca</div>
        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>

            <div style={{width: 88, height: 32, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div style={{width: 88, height: 32, justifyContent: 'center', alignItems: 'center', display: 'flex',}}>
                    <button style={{width: 88, height: 32, position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex',borderRadius: 16, background: '#A076F2',}}>
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Roboto sans-serif', fontWeight: '900',  wordWrap: 'break-word',zIndex:2 }}>Todos</div>
                    </button>
                </div>
            </div>
                {/* todos livros categorias */}
            <div   
            style={{width: 88, height: 32, justifyContent: 'center', alignItems: 'center', display: 'flex',}}>
                <button style={{ width: 88, height: 32, position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex',borderRadius: 16}}>
                <div style={{color: '#757575', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>{categories.TECHNOLOGY}</div>
                </button>
            </div>

            <div style={{width: 88, height: 32, justifyContent: 'center', alignItems: 'center', display: 'flex', borderRadius: 16}}>
                <button style={{width: 88, height: 32, position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex',borderRadius: 16}}>
                   
                    <div style={{color: '#757575', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>{categories.ADVENTURE}</div>
                </button>
            </div>
            <div style={{width: 88, height: 32, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <button style={{width: 88, height: 32, position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex',borderRadius: 16}}>
                    
                    <span style={{color: '#757575', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>{categories.COMEDY}</span>
                </button>
            </div>
        </div>

        {/* allbooks  */}
        <div style={{width: 936,height:461, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex',  flexWrap:'wrap', overflowY:'scroll'}}>
        {data?.data?.allBooks.map(book =>
            <div key={book.name.id} onClick={openBookDetailsPage} style={{ cursor:'pointer',height: 100, width:196, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex',padding:1 }}>
                <img style={{width: 68, height: 100, borderRadius: 8}} src={book.cover} />
                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'inline-flex'}}>
                    <div style={{alignSelf: 'initial', color: '#555555', fontSize: 13, fontFamily: 'Roboto', fontWeight: '900', lineHeight: 1, wordWrap: 'normal', flexDirection: 'column'}}>{book.name}</div>
                    <div style={{alignSelf: 'stretch', color: '#757575', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>{book.author.name}</div>
                </div>
            </div>
           )}
        </div>

    </div>

    )
};
