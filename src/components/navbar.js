import Query from "../services/query";
import { useQuery } from '../services/Api';
import React,{useEffect}  from 'react'
import Lupa from "./icons/lupa";
import Add from "./icons/add";
import Favorito from "./icons/favorito";


export default function NavBar(){
    const {data}= useQuery(Query)

return(

    <div style={{ width: 936, left: 172, top: 12, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
    <div style={{ width: 76.90, paddingTop: 10, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
        {/* <div style={{width: 76.90, height: 23.76}}></div> */}
    </div>
    <div style={{ flex: '1 1 0', height: 40, paddingTop: 6, paddingBottom: 6, paddingLeft: 16, paddingRight: 8, borderRadius: 8, overflow: 'hidden', border: '1px #E0E0E0 solid', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
        <div style={{ color: '#757575', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word' }}>Busque um livro</div>
        <div style={{ width: 24, height: 24, position: 'relative' }}>
            <div style={{ width: 20, height: 20, left: 2, top: 2, position: 'absolute', }}> <Lupa /> </div>
        </div>
    </div>
    <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex' }}>
        <div style={{ width: 97, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex' }}>
            <div style={{ width: 24, height: 24, position: 'relative' }}>
                {/* <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div> */}
                <div style={{ width: 20, height: 20, left: 2, top: 2, position: 'absolute', }}><Add /></div>
            </div>
            <div style={{ color: '#555555', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Adicionar</div>
        </div>
        <div style={{ width: 95, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex' }}>
            <div style={{ width: 24, height: 24, position: 'relative' }}>
                {/* <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div> */}
                <div style={{ width: 20, height: 18.35, left: 2, top: 3, position: 'absolute', }}><Favorito /></div>
            </div>
            <div style={{ color: '#555555', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Favoritos</div>
        </div>
        {/* <div style={{width: 40, height: 0, transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #E4E4E4 solid'}}></div> */}
        {/* {data?.map(teste => */}
        <div style={{ width: 110, justifyContent: 'center', alignItems: 'center', gap: 12, display: 'flex' }}>
            <img style={{ width: 32, height: 32, borderRadius: 9999 }} />
            <div style={{ color: '#555555', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Jucicreide</div>
        </div>
        {/* )}  */}
    </div>
</div>
              
      
    
            )
        }