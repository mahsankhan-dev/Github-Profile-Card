var searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', function () {
  var newValue = document.getElementById('myInput').value
  var card = document.getElementById('card')
  card.style.display = 'flex'
  var newString = 'https://api.github.com/users/' + newValue
  if (newValue == '') {
    alert('Empty data is not allowed')
  }
  else {
    var newValue = document.getElementById('myInput').value = ''
    fetch(newString)
      .then(function (response) {
        return response.json()
      })
      .then(function (all_Details) {
        console.log('photos', all_Details)
        var imageContainer = document.getElementById('userAvator')
        imageContainer.setAttribute('src', all_Details.avatar_url)
        var userName = all_Details.name
        var userBio = all_Details.bio
        var userId = all_Details.id
        var userFollowers = all_Details.followers
        var userFollowing = all_Details.following
        var userUrl = all_Details.html_url


        document.getElementById('userName').innerHTML = userName
        document.getElementById('bio').innerHTML = userBio
        document.getElementById('userId').innerHTML = userId
        document.getElementById('follo').innerHTML = userFollowers
        document.getElementById('following').innerHTML = userFollowing
        document.getElementById('Url').innerHTML = userUrl
      })
      .catch(function (err) {
        console.log('Error', err)
      })
  };


  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  var card = document.querySelector('.card')
  var myBtn = document.querySelector('.myBtn')
  var toggle = document.querySelector('.toggle')
  var body = document.querySelector('body')

  toggle.onclick = function () {
    card.classList.toggle('dark')
    myBtn.classList.toggle('dark')
    body.classList.toggle('body')
  }
});