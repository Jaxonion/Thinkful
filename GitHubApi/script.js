//initiates search when search button clicked//
function searchButtonClicked() {
    $('body').on('click', '.js-search-button', event => {
      console.log(`'js-search-button' clicked`)
      $('.container').empty()
      createUrl();
    })
  }
  
  //creates URL for GET api fetch//
  function createUrl(){
    console.log(`'createUrl' function ran`)
    let searchValue = $('.js-search-box').val()
    let baseUrl = 'https://api.github.com/users'
    let urlArray = [baseUrl, searchValue, 'repos']
    if (searchValue === "") {
      alert('type in a value')
      console.log(`no value typed`)
    }
    else {
    console.log(`searchValue is ${searchValue}`)
    let url = urlArray.join('/')
    console.log(`'${url}' created`)
    getUserRepos(url);
    }
  }
  
  //gets Api response for search//
  async function getUserRepos(url) {
    console.log(`'getUserRepos' function ran`)
    let response = await fetch(url)
    let result = await response.json()
    //console.log(result)
    displayUserRepos(result)
    //let urlUserRepos = result.repos_url
    //let responseUserRepos = await fetch(urlUserRepos)
    //let resultUserRepos = await responseUserRepos.json()
    //console.log(resultUserRepos)
    //displayUserRepos(resultUserRepos)
  
  }
  
  //turns JSON message to HTML and displays it//
  function displayUserRepos(responseJson) {
    console.log(`'displayUserRepos' ran`)
    console.log(responseJson.length)
    //console.log(responseJson)
    for (i=0; i < responseJson.length; i++) {
      //console.log(`'displayUserRepos' for loop ran`)
      console.log(responseJson[i].name)
      let repoName = responseJson[i].name
      let htmlOfRepo = responseJson[i].html_url
      $('.container').append(`<a class= 'repoName' href='${htmlOfRepo}'>${repoName}</a>`)
    }
  }
  
  
  function handlePage() {
    searchButtonClicked()
  }
  
  //handles all functions needed to get site working
  handlePage()