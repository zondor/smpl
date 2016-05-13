var data = {id: 1, title: 'Lorem Ipsum', article: 'Article content'};

template = '<h1>{{title}}</h1><p>{{article}}</p>';

function updateMain(e) {
  var hash = document.location.hash.valueOf().substring(1);
  var html = Mustache.to_html(template, data);
  var target = document.getElementById('content');
  target.innerHTML = html;
}

window.addEventListener("hashchange", updateMain, false);
