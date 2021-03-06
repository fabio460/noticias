


const apiManchetes = {
  get:async (endpoint)=>{
    let req = await fetch(`https://newsapi.org/v2/everything?q=${endpoint}&apiKey=ec1798daadd9421b82a4eb83f01de8c8`);
    let json =await req.json();
    return json.articles;
  },
  principaisBrasil:async (endpoint)=>{
    let req = await fetch(`https://newsapi.org/v2/top-headlines?country=${endpoint}&apiKey=ec1798daadd9421b82a4eb83f01de8c8`);
    let json =await req.json();
    return json.articles;  
   
  },
  categoria: async (endpoint,pais)=>{
    let req = await fetch(`https://newsapi.org/v2/top-headlines?country=${pais}&category=${endpoint}&apiKey=ec1798daadd9421b82a4eb83f01de8c8`);
    let json =await req.json();
    return json.articles;  
  },
  ibge:async ()=>{
    let req = await fetch(`http://servicodados.ibge.gov.br/api/v3/noticias/`);
    let json =await req.json();
    return json;
  },
}
export default apiManchetes;