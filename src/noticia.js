import React from "react";

function Noticia({urlToImage,title,description,content,author}){
    return <>
        <div className='bloco_noticia'>
           
           <h1>{title}</h1>
           <img src={urlToImage} alt=''/>
           <div className='descricao'>{description}</div>
           <div className='conteudo'>{content}</div>
        </div>
    </>
}
export default Noticia;