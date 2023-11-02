import Query from "../services/query";
import { useQuery } from '../services/Api';
import React,{useState, useEffect} from 'react'


export default function FavBooks(){
    const {data}= useQuery(Query)
    const [item, setItem] = useState()

    function openBookDetailsPage() {
        // setIsOpen(true);
        window.open(`./pages/Book.js`);
        console.log(data.data.allBooks.id, 'euuu')
      };

    return (
    <>
            <div  style={{ left: 172, top: 125, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex', width: 936, }}>
            <div style={{ width: 936, height: 33, justifyContent: 'space-between', alignItems: 'baseline', display: 'inline-flex', margin: '10px 0 -10px 0' }}>
                <div style={{ color: '#555555', fontSize: 28, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Livros favoritos</div>
                <div style={{ textAlign: 'center', color: '#A076F2', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>ver todos</div>
            </div>
            {/* livros favoritos  */}
            <div style={{ width: 936, display: 'flex', gap: 20, paddingTop: 1, overflowX: 'scroll', overflowY: 'hidden' }}>
                {/* {data?.data?.favoriteBooks.filter(book => book.isFavorite).map(item => */}
        {
                
            (data) ? (data.data.favoriteBooks.map(item => {
                return(
                   
                    <div key={item.name.id}  onClick={openBookDetailsPage} style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex', flexDirection: 'row', width: 936, padding: 20 }}>
                        <div style={{ width: 136, height: 262, position: 'relative', cursor: 'pointer' }}>
                            <img style={{ width: 136, height: 198, left: 0, top: 0, position: 'absolute', borderRadius: 8 }} src={item.cover} />
                            <div style={{ width: 136, height: 36, left: 0, top: 208, position: 'absolute', color: '#555555', fontSize: 10, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>{item.name}</div>
                            <div style={{ width: 136, left: 0, top: 246, position: 'absolute', color: '#757575', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>{item.author.name}</div>
                        </div>
                    </div>
                    
                
                )
         })  
        ): ''
        }
            </div>
        </div>
    
        </>)
}