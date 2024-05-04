//Key 12ce1107b2424ad1a2229addfabe2d39

const getNews = async() => {
    const headlines = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=12ce1107b2424ad1a2229addfabe2d39')
    .then(response => response.json())
    .then(data => {return data})
    .catch(err => console.log(err))

    return headlines
}


export {getNews}