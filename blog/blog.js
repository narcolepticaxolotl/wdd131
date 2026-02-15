// 20260214
// https://wddbyui.github.io/wdd131/prove/prove_wk6.html

const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

const bookList = document.querySelector('#book-list');

    articles.forEach(book => {
        // Code for going through each book and creating content for that book
        // Create an element to add info to.
        let newBook = document.createElement('article');
        newBook.className = 'book';
        // Collect info from source list
        let titleInfo = book.title;
        let dateInfo = book.date;
        let descriptionInfo = book.description;
        let imgSrcInfo = book.imgSrc;
        let imgAltInfo = book.imgAlt;
        let agesInfo = book.ages;
        let genreInfo = book.genre;
        let starsInfo = book.stars;
        let starsNum = starsInfo.length;
        // Add child elements to new element.
        //// Title
        let newBookTitle = document.createElement('h2');
        newBookTitle.textContent = titleInfo;
        newBook.appendChild(newBookTitle);

        //// Separator
        let sep = document.createElement('hr');
        sep.className = 'desktop-only';
        newBook.appendChild(sep);
        
        //// Image
        let newBookImg = document.createElement('img');
        ////// Image Source
        newBookImg.src = imgSrcInfo;
        ////// Image Alt
        newBookImg.alt = imgAltInfo;
        newBook.appendChild(newBookImg);
        
        //// Basic Info
        let basicInfo = document.createElement('div');
        basicInfo.className = 'basic-info';
        basicInfo.innerHTML = `<p><em>${dateInfo}</em></p>
                               <p>${agesInfo}</p>
                               <p>${genreInfo}</p>
                               <p><span aria-label="${starsNum} out of 5 stars">${starsInfo}</span></p>`;
        newBook.appendChild(basicInfo);
        
        //// Description
        let newBookDescription = document.createElement('p');
        newBookDescription.textContent = descriptionInfo;
        newBook.appendChild(newBookDescription);
        newBookDescription.className = 'desc'
        // Put collected info into child elements.

        // Output new construction to the screen.
        bookList.appendChild(newBook);
    });