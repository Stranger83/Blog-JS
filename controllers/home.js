const Article = require('mongoose').model('Article');

function formatArticles(articles){
    articles.forEach(function (a) { a.content.length > 250 ? a.content = a.content.substr(0,250) : a.content});
    return articles;
}

module.exports = {
  index: (req, res) => {
      Article.find({}).limit(6).populate('author').then(articles => {
          res.render('home/index', {articles: formatArticles(articles)});
      })
  }
};