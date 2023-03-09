let movies = require('./movies')

let moviesDH = {
    listMovies:()=>{movies.forEach((i)=>{console.log(i.id,i.title)})},

    searchMovie:(aBuscar)=>{
        let encontrada = movies.find((i)=>{return (i.id == aBuscar || i.title== aBuscar) })
    return encontrada },

    searchMoviesByGenre: (generoAbuscar)=>{
        let encontrada = movies.find((i)=>{return(i.genre == generoAbuscar)})
        return encontrada
    },

    totalPrice: ()=>{
        let total = 0
        movies.forEach((v,i)=>{total+=v.price; return total})
        //movies.reduce((acumular,i)=>{ console.log( acumular + ' ' + i)})
        return total
    },

    changeMovieGenre:(id,generoNew)=>{
        let aCambiar=moviesDH.searchMovie(id)
        movies[1].id = generoNew
        aCambiar.genre = generoNew
        return aCambiar
    }
}
console.log(moviesDH.changeMovieGenre(1,'hola'))
console.log(moviesDH.totalPrice())

let array = [{a:1,b:1},
    {a:2,b:1},
    {a:1,b:1}]
let total=0
let array2 = array.forEach(function(v,i){total+=(v.a);return total})
//let total = array2.reduce((acumular,i)=>{return acumular+i})
//console.log(total)