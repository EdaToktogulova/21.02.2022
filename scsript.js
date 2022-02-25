// document.querySelector('select').addEventListener('input', function() {
//    const value = this.value;

//    document.querySelectorAll('ul').forEach(function(ul) {
//       if (value === ul.id) {
//          ul.className = '';
//       }
//       else {
//          ul.className = 'hidden'
//       }
//    });
// });

const articles = [
   {
      id: "article-1",
      title: "Hello world",
      image: "Cutest_Koala.jpg",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe reiciendis asperiores quaerat amet sequi officiis quasi libero ratione eveniet consequuntur incidunt dolores praesentium alias vel sapiente ducimus itaque optio?"
   },
   {
      id: "article-2",
      title: "Hello world",
      image: "article",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe reiciendis asperiores quaerat amet sequi officiis quasi libero ratione eveniet consequuntur incidunt dolores praesentium alias vel sapiente ducimus itaque optio?"
   },
   {
      id: "article-3",
      title: "Hello world",
      image: "article",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe reiciendis asperiores quaerat amet sequi officiis quasi libero ratione eveniet consequuntur incidunt dolores praesentium alias vel sapiente ducimus itaque optio?"
   },
]

const main = document.querySelector('main')
articles.forEach(article => {
   const article = document.createElement('article');
   const h1 = document.createElement('h1');
   const img = document.createElement('img');
   const p = document.createElement('p');

   h1.textContent = article.title;
   img.src
});

