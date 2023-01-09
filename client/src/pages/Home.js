import React, { useState, useEffect } from 'react';
import data from '../data';
// import { getTrending } from '../../../server/src/services/movie.service';

const Home = () => {
  const [tredingMovie_API_Content, setTrendingMoive_API_Content] = useState([{}])

  useEffect(() => {
    fetch('/movies/trending')
      .then(res => res.json())
      .then(data => setTrendingMoive_API_Content(data))
    
    console.log(data)
  }, [])

  return (
    <div>
      
    </div>
  )

};

export default Home;

// const Home = () => {
//   const [myData, setMyData] = useState([]);
//   useEffect(() => {
//     setMyData(data);
//   }, []);
  
//   return (
//     <div>
//       {myData.map((data) => {
//         const { poster_path, media_type, title, release_date } = data;
//         return (
//         <div key={data.id}>
//           <h1>{poster_path}</h1>
//           <h3>{title}</h3>
//           <h4>{media_type}</h4>
//           <h5>{release_date}</h5>
//         </div>
//       )})}
//     </div>
//   );
// };

// export default Home;

// import React, { Component } from 'react';

// class Movies extends Component {
  
//   constructor(props){
//     super(props);
//     this.state = {
//       movies: {}
//     }
//   }
  
//   componentDidMount() {
//     fetch('/movies/trending')
//       .then(res => res.json())
//       .then(movies => {
//         this.setState({ movies: movies });
//       })
//   }

//   render(){
//     return(
//       <div>
//         <h1>
//           Movies Component
//         </h1>
//         <ul>
//           {
//             this.state.movies.map(movie => {
//               <li>
//                 Title: {movie.title}
//               </li>
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }

// export default Movies;