import React, { useEffect, useState }  from "react";
import apiManchetes from "./apiNoticias";
import Noticia from "./noticia";
import logo from './logo.png';
function Noticias(){
    const [list,setLista]=useState([]);
    const [texto,setTexto]=useState();
     useEffect( ()=>{
       // let l = await apiManchetes.get('noticias');
        //setLista(l);
        let endpoint='noticias'
        async function fetchUser() {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${endpoint}&apiKey=ec1798daadd9421b82a4eb83f01de8c8`);
            const json = await response.json();
            const data=json.articles;
            setLista(data);
          }
          fetchUser();
    },[]);
    const listar =async ()=>{
        const l = await apiManchetes.get(texto);
        setLista(l);
       
    }
    const principaisBrasil = async ()=>{
        const l = await apiManchetes.principaisBrasil('br');
        setLista(l);
    }
    const entretenimento = async ()=>{
        const l = await apiManchetes.categoria('entertainment','br')
        setLista(l);
    }
    const esportes = async ()=>{
        const l = await apiManchetes.categoria('sports','br');
        setLista(l);
    }
    const tecnologia = async ()=>{
        const l = await apiManchetes.categoria('technology','br');
        setLista(l);
    }
    const ciencia = async ()=>{
        const l = await apiManchetes.categoria('science','br');
        setLista(l);
    }
   
    console.log(list);
    return <>
        <header>
            <a href='https://fabio460.github.io/Portifolio/'><img src={logo} alt=''/></a>
            <div className='blocoPrincipais'>
                <div className='principais' onClick={principaisBrasil}>principais</div>
                <div className='principais' onClick={esportes}>esportes</div>
                <div className='principais' onClick={entretenimento}>entretenimento</div>
                <div className='principais' onClick={tecnologia}>tecnologia</div>
                <div className='principais' onClick={ciencia}>ciencia</div>
            </div>
            <div className='menuPesquisar'>
                <input placeholder='pesquisar ...' type='text' value={texto} onChange={(e)=>{setTexto(e.target.value)}}/>
                <button onClick={listar}>pesquisar</button>
            </div>
        </header>
        <div className='grid'>
            <div className='titulo'>Noticias pelo mundo</div>
            {list.map((item)=>{
            return <Noticia title={item.title} urlToImage={item.urlToImage} description={item.description} content={item.content} author={item.author}/>
            })}
        </div>    
    </>
}
export default Noticias;