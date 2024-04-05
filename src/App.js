import React, { useState } from 'react'
import { useEffect } from 'react'
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=c702aae4';

const App = () => {

  const [Movies, setMovies] = useState([]);
  const [searchTerm, setSerchTerm] = useState('');

   const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
   }

   useEffect(()=>{
       searchMovies('Spiderman')
   },[])

//    const movie1 = {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// }




   return (
    <div className='app'>
      <h1>MovieLand</h1>
       <div className='search'>
       < input 
       placeholder='Serch for movies ...'
       value = {searchTerm}
       onChange={(e)=>setSerchTerm(e.target.value)}/>
       <div className='searchIconDiv'
       onClick={()=>searchMovies(searchTerm)}>
       <i class="ri-search-line"></i>
       </div>
       </div>

      {
        Movies?.length > 0 ?(
          <div className='container'>
         {Movies.map((Movie)=>(
          <MovieCard movie = {Movie}/>
         ))}
       </div>
        ):(
          <div className='empty'>
          <h2>
            No Movies Found
          </h2>
          </div>
        )
      }

       
    </div>
  )
}

export default App