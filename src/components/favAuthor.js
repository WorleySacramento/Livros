import Query from "../services/query";
import { useQuery } from '../services/Api';


export default function FavAuthors(){
    const {data}= useQuery(Query)

return(

    
    <div style={{left: 172, top: 532, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
        <div style={{width: 936, justifyContent: 'space-between', alignItems: 'baseline', display: 'inline-flex'}}>
            <div style={{color: '#555555', fontSize: 28, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Artistas favoritos</div>
            <div style={{textAlign: 'center', color: '#A076F2', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>ver todos</div>
        </div>
        {/* autores favoritos  */}
        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
        {data?.data?.favoriteAuthors.map(author =>
            <div key={author.name.id} style={{height: 70, padding: 1, borderRadius: 8, border: '1px #E0E0E0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                <img style={{width: 68, height: 68, borderRadius: 8}} src={author.picture} alt='imagem autor'/>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'inline-flex'}}>
                    <div style={{width: 161.13, color: '#555555', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 2, wordWrap: 'break-word'}}>{author.name}</div>
                    <div style={{width: 161.13, color: '#757575', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>{author.booksCount} livros</div>
                </div>
            </div> 
            )}          
        </div>
    </div>
            )
        }