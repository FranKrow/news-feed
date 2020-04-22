const createFeed = (data) => {
  const feedList = document.querySelector('#feedsList');
  const feedContent = document.querySelector('#feedsContent');

  for (let index = 0; index < data.length; index++) {
    const feed = data[index];

    // TAB HEADERS
    const feedItem = document.createElement('li');
    feedItem.classList.add('nav-item');
    const feedItemLink = document.createElement('a');
    feedItemLink.classList.add('nav-link');
    if (index === 0) feedItemLink.classList.add('active');
    feedItemLink.href = '#' + feed.source;
    feedItemLink.setAttribute('role', 'tab');
    feedItemLink.textContent = feed.source;
    feedItemLink.setAttribute('data-toggle', 'tab');

    feedItem.appendChild(feedItemLink);
    feedList.appendChild(feedItem);

    // TAB CONTENT
    const feedsNews = document.createElement('div');
    feedsNews.classList.add('tab-pane');
    feedsNews.classList.add('fade');
    if (index === 0) {
      feedsNews.classList.add('show');
      feedsNews.classList.add('active');
    }
    feedsNews.id = feed.source;
    feedsNews.role = 'tabpanel';
    const feedsContainer = document.createElement('div');
    feedsContainer.classList.add('row');
    feedsContainer.classList.add('feedsContainer');
    feedsContainer.setAttribute('role', 'tab');
    for (let j = 0; j < feed.news.length; j++) {
      const n = feed.news[j];

      const col = document.createElement('div');
      const card = document.createElement('div');
      // const cardHeader = document.createElement('div');
      const cardBody = document.createElement('div');
      const image = document.createElement('img');
      const a = document.createElement('a');
      const p = document.createElement('p');
      const pDate = document.createElement('p');
      const small = document.createElement('small');

      p.classList.add('card-text');
      small.classList.add('text-muted');
      col.classList.add('col-md-3');
      card.classList.add('card');
      card.classList.add('bg-light');
      card.classList.add('mb-2');
      card.classList.add('img-hover-zoom');
      card.addEventListener('click', () => {
        window.open(n.link, '_blank');
      });
      // cardHeader.classList.add('card-header');
      cardBody.classList.add('card-body');
      image.classList.add('card-img-top');
      a.classList.add('card-title');
      pDate.classList.add('card-text');

      p.textContent = n.prev;
      small.textContent = n.datePost;
      a.href = n.link;
      a.textContent = n.title;
      a.target = '_blank';
      image.src = n.img;
      // cardBody.textContent = n.prev;
      pDate.appendChild(small);
      cardBody.appendChild(a);
      cardBody.appendChild(p);
      cardBody.appendChild(pDate);
      card.appendChild(image);
      // card.appendChild(cardHeader);
      card.appendChild(cardBody);
      col.appendChild(card);

      feedsContainer.appendChild(col);
    }

    feedsNews.appendChild(feedsContainer);
    feedContent.appendChild(feedsNews);
  }
};

/***
 * Make the call to the back
 * */
const callB = async () => {
  await fetch('/news')
    .then((resp) => resp.json())
    .then((res) => {
      createFeed(res.data);
    })
    .finally(function () {
      console.log('?');
      const spin = document.getElementById('spinner');
      spin.classList.add('removeSpinner');
    });
};

callB();
