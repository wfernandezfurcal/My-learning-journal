import { articles, mainArticleData } from '/data.js'

let phonesMediaQuery = window.matchMedia("(width < 600px)")

let main = document.getElementById('main')
let mainArticleSection = document.getElementById('mainArticle')
let mainArticleDetails = document.getElementById('mainArticleDetails')
let articlesSection = document.getElementById('articles-section')
let viewMoreBtn = document.getElementById('viewMoreBtn')

// Render blog sections

viewMoreBtn.addEventListener('click',function(){
    setTimeout(function(){
        renderArticles(true)
    },250)
    
})

function renderArticles(clicked){

    if (phonesMediaQuery.matches && !clicked){
        articlesSection.innerHTML = articles.slice(0,3).map( article => `
            <article>
                <img src="${article.imageUrl}">
                <p class="articleDate">${article.date.toUpperCase()}</p>
                <h1>${article.title}</h1>
                <p>${article.preview}</p>
            </article>`).join('')
    }else{
        articlesSection.innerHTML = articles.map( article => `
            <article>
                <img src="${article.imageUrl}">
                <p class="articleDate">${article.date.toUpperCase()}</p>
                <h1>${article.title}</h1>
                <p>${article.preview}</p>
            </article>`).join('')

        viewMoreBtn.style.visibility = 'hidden'
    }
}

renderArticles(false)


// Render main article

mainArticleDetails.addEventListener('click', function(){
    
    main.innerHTML = `<main>
    <p class="articleDate">JULY 23, 2022</p>
        <div id="mainArticleDetails">
            <h1>My new journey as a bootcamp student.</h1>
            <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
        </div>
    <div class="mainArticle" id="mainArticle">
    </div>
    <section id="articles-section">
    </section>
    <button id="viewMoreBtn">View More</button>
</main>`


})

