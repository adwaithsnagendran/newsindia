console.log('this is working')

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 
  
apikey = '63913343bb7748bb8e81bb8467365dc8';
source = 'country=us'

let newsAccordion = document.getElementById('newsAccordion');

const news = new XMLHttpRequest();
news.open('Get',`https://newsapi.org/v2/top-headlines?${source}&apiKey=${apikey}` ,true )

news.onload = function(){
    if(this.status==200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        console.log(articles);
        let newsHtml='';
        articles.forEach(function(element,index){
          let  newsbox = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                  <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collaps${index}">
                                    <b>Breaking News ${index+1}:</b> ${element["title"]};
                                  </button>
                                </h2>
                              </div>
                          
                              <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body">
                                 ${element["content"]}.<a href="${element["url"]}" target="_blank"> read more here </a>
                                </div>
                              </div>
                            </div>`
            newsHtml += newsbox;
        });
        newsAccordion.innerHTML = newsHtml;

    }else{
        console.log("Some error occured")
    }
}

news.send();