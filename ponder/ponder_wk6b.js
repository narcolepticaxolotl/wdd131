// 20260213
// https://wddbyui.github.io/wdd131/ponder/ponder_wk6b.html

console.log('JavaScript Loaded!');
const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      }
    ];

const movieList = document.querySelector('#movie-list');

    movies.forEach(movie => {
        // Code for going through each movie and creating content for that movie
        // Create an element to add info to.
        let newMovie = document.createElement('article');
        newMovie.className = 'movie';
        // Collect info from source list
        let titleInfo = movie.title;
        let dateInfo = movie.date;
        let descriptionInfo = movie.description;
        let imgSrcInfo = movie.imgSrc;
        let imgAltInfo = movie.imgAlt;
        let agesInfo = movie.ages;
        let genreInfo = movie.genre;
        let starsInfo = movie.stars;
        // Add child elements to new element.
        //// Title
        let newMovieTitle = document.createElement('h2');
        newMovieTitle.textContent = titleInfo;
        newMovie.appendChild(newMovieTitle);
        //// Date
        let newMovieDate = document.createElement('p');
        // let releaseDateLabel = "Release Date: ";
        // releaseDateLabel.
        newMovieDate.innerHTML = `<b>Release Date:</b> ${dateInfo}`;
        newMovie.appendChild(newMovieDate);
        
        //// Image
        let newMovieImg = document.createElement('img');
        ////// Image Source
        newMovieImg.src = imgSrcInfo;
        ////// Image Alt
        newMovieImg.alt = imgAltInfo;
        newMovie.appendChild(newMovieImg);
        
        //// Ages
        let newMovieAges = document.createElement('p');
        newMovieAges.innerHTML = `<b>Recommended Age:</b> ${agesInfo}`;
        newMovie.appendChild(newMovieAges);
        //// Genre
        let newMovieGenre = document.createElement('p');
        newMovieGenre.innerHTML = `<b>Genre:</b> ${genreInfo}`;
        newMovie.appendChild(newMovieGenre);
        //// Stars
        let newMovieStars = document.createElement('p');
        newMovieStars.innerHTML = `<b>Rating:</b> ${starsInfo}`;
        newMovie.appendChild(newMovieStars);
        //// Description
        let newMovieDescription = document.createElement('p');
        newMovieDescription.textContent = descriptionInfo;
        newMovie.appendChild(newMovieDescription);
        newMovieDescription.className = 'desc'
        // Put collected info into child elements.

        // Output new construction to the screen.
        movieList.appendChild(newMovie);
    });
          