  ///< reference types = "../@types/Jquery" / >
  var allMeal = [];
  var rowData = document.getElementById('rowData')
  async function getMeal() {
      var result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
      var finalresult = await result.json();
      //   console.log(finalresult);
      allMeal = finalresult.meals;
      display();
      removesearc();
  }
  getMeal();


  function display() {
      var cartona = '';
      for (var i = 0; i < allMeal.length; i++) {
          cartona +=
              `<div class="col-md-3">
        <div onclick="getMealDetails(${allMeal[i].idMeal});" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
            <img class="w-100" src=${allMeal[i].strMealThumb} alt="" srcset="">
            <div class="meal-layer position-absolute  align-items-center text-black p-2 start-0 end-0 end-0 ">
                <h3>${allMeal[i].strMeal}</h3>
            </div>
        </div>
    </div>`
      }
      rowData.innerHTML = cartona;
  }
  window.addEventListener('load', function() {
      $('.loadingScreen').fadeOut(1000)
      $('body').css('overflow', 'visible')
  })
  var alldetail = [];
  async function getMealDetails(i) {



      try {
          var result2 = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`);
          var finalresult2 = await result2.json();
          //   console.log(finalresult2);
          alldetail = finalresult2.meals;
          console.log(alldetail);
      } catch (error) {
          console.log('Error fetching meal category:', error);
      }
      var cartona = ''
      cartona += `<div class ="col-md-4 text-white">
      <img class = "w-100 rounded-3"src=${alldetail[0].strMealThumb} alt = "" >
      <h2 >${alldetail[0].strMeal}</h2>
      </div> 
      <div class = "col-md-8 text-white">
      <h2> Instructions </h2> 
      <p >${alldetail[0].strInstructions} </p> <h3><span class="fw-bolder">Area :</span>${alldetail[0].strArea} </h3>
      <h3><span class="fw-bolder">Category : </span>${alldetail[0].strCategory}</h3>
      <h3>Recipes :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
          <li class="alert alert-info m-2 p-1">1 cup Lentils</li>
          <li class="alert alert-info m-2 p-1">1 large Onion</li>
          <li class="alert alert-info m-2 p-1">1 large Carrots</li>
          <li class="alert alert-info m-2 p-1">1 tbs Tomato Puree</li>
          <li class="alert alert-info m-2 p-1">2 tsp Cumin</li>
          <li class="alert alert-info m-2 p-1">1 tsp Paprika</li>
          <li class="alert alert-info m-2 p-1">1/2 tsp Mint</li>
          <li class="alert alert-info m-2 p-1">1/2 tsp Thyme</li>
          <li class="alert alert-info m-2 p-1">1/4 tsp Black Pepper</li>
          <li class="alert alert-info m-2 p-1">1/4 tsp Red Pepper Flakes</li>
          <li class="alert alert-info m-2 p-1">4 cups Vegetable Stock</li>
          <li class="alert alert-info m-2 p-1">1 cup Water</li>
          <li class="alert alert-info m-2 p-1">Pinch Sea Salt</li>
      </ul>

      <h3>Tags :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">

          <li class="alert alert-danger m-2 p-1">${alldetail[0].strTags}</li>
      </ul>

      <a target="_blank" href=${alldetail[0].strSource} class="btn btn-success">Source</a>
      <a target="_blank" href=${alldetail[0].strYoutube} class="btn btn-danger">Youtube</a>
  </div>`
      rowData.innerHTML = cartona
      removesearc()

  }



  //   function displayMeal(i) {
  //       var cartona = '';

  //   }
  const menuwidth = $('.side-nav-menu').innerWidth()

  $('.saeed').click(function() {

      if ($('.side-nav-menu').css('left') == '0px') {

          closeNav()


      } else {
          openNav()

      }

  })

  function closeNav() {
      let icon = document.querySelector('.fa-bars')
      let icon2 = document.querySelector('.open-close-icon')
      icon2.classList.add('d-none')
      icon.classList.remove('d-none');
      $('.side-nav-menu').animate({ left: -menuwidth + 65 + "px" }, 1000)




  }

  function openNav() {
      let icon = document.querySelector('.fa-bars')
      let icon2 = document.querySelector('.open-close-icon')
      $('.side-nav-menu').animate({ left: '0px' }, 1000)

      icon2.classList.remove('d-none')
      icon.classList.add('d-none');
  }
  async function getCategories() {

  }


  var allCaogry = [];
  var rowData = document.getElementById('rowData')
  async function getCategories() {
      var result = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      var finalresult = await result.json();
      console.log(finalresult);
      allCaogry = finalresult.categories;
      display2();
      removesearc()
  }


  function display2() {
      var cartona = '';
      for (var i = 0; i < allCaogry.length; i++) {
          cartona +=
              `<div class="col-md-3">
              <div onclick="getCategoryMeals('${allCaogry[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                  <img class="w-100" src=${allCaogry[i].strCategoryThumb} alt="" srcset="">
                  <div class="meal-layer position-absolute text-center text-black p-2 d-block">
                      <h3>${allCaogry[i].strCategory}</h3>
                      <p>${allCaogry[i].strCategoryDescription}</p>
                  </div>
              </div>
          </div>`
      }
      rowData.innerHTML = cartona;
  }
  var allMealCatogry = []
  async function getCategoryMeals(hambozo) {;
      //   var rowData = document.getElementById('rowData')
      try {
          var result2 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${hambozo}`);
          var finalresult2 = await result2.json();
          console.log(finalresult2);
          allMealCatogry = finalresult2.meals;
          console.log(allMealCatogry);
      } catch (error) {
          console.log('Error fetching meal category:', error);
      }
      display3();
  }

  function display3() {
      var cartona = '';
      for (var i = 0; i < allMealCatogry.length; i++) {
          cartona += `
          <div class="col-md-3">
                    <div onclick="getMealDetails(${allMealCatogry[i].idMeal});" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src=${allMealCatogry[i].strMealThumb} alt="" srcset="">
                        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                            <h3>${allMealCatogry[i].strMeal}</h3>
                        </div>
                    </div>
                </div>

          `
      }
      rowData.innerHTML = cartona;


  }
  var allArea = [];

  async function getArea() {
      var result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      var finalresult = await result.json();
      console.log(finalresult);
      allArea = finalresult.meals;
      display4();
      removesearc()
  }

  function display4() {
      var cartona = '';
      for (var i = 0; i < allArea.length; i++) {
          cartona += `
          <div class="col-md-3">
          <div onclick="getAreaMeals('${allArea[i].strArea}')" class="rounded-2 text-center cursor-pointer">
              <i class="fa-solid fa-house-laptop fa-4x"></i>
              <h3>${allArea[i].strArea}</h3>
          </div>
      </div>

        `
      }
      rowData.innerHTML = cartona;


  }
  var allMealArea = [];

  async function getAreaMeals(i) {
      var result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${i}`);
      var finalresult = await result.json();
      console.log(finalresult);
      allMealArea = finalresult.meals;
      display5();
  }

  function display5() {
      var cartona = '';
      for (var i = 0; i < allMealArea.length; i++) {
          cartona += ` <div class="col-md-3">
          <div onclick="getMealDetails(${allMealArea[i].idMeal})" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
              <img class="w-100" src=${allMealArea[i].strMealThumb} alt="" srcset="">
              <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                  <h3>${allMealArea[i].strMeal}</h3>
              </div>
          </div>
  </div>

              `
      }
      rowData.innerHTML = cartona;


  }
  var allGetIngredients = [];
  async function getIngredients() {

      var result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      var finalresult = await result.json();
      console.log(finalresult);
      allGetIngredients = finalresult.meals;
      display6();
      removesearc()
  }

  function display6() {
      var cartona = '';
      for (var i = 0; i < 20; i++) {
          cartona += ` <div class="col-md-3">
          <div onclick="getIngredientsMeals('${allGetIngredients[i].strIngredient}')" class="rounded-2 text-center cursor-pointer" >
                  <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                  <h3>${allGetIngredients[i].strIngredient}</h3>
                  <p>${allGetIngredients[i].strDescription.slice(0,120)}</p>
          </div>
  </div>
 `
      }
      rowData.innerHTML = cartona;

  }
  var allMealGetIngredients = [];

  async function getIngredientsMeals(i) {


      var result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${i}`);
      var finalresult = await result.json();
      console.log(finalresult);
      allMealGetIngredients = finalresult.meals;
      display7();
      removesearc()
  }

  function display7() {
      var cartona = '';
      for (var i = 0; i < allMealGetIngredients.length; i++) {
          cartona += `
        <div class="col-md-3">
                  <div onclick="getMealDetails(${allMealGetIngredients[i].idMeal});" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                      <img class="w-100" src=${allMealGetIngredients[i].strMealThumb} alt="" srcset="">
                      <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                          <h3>${allMealGetIngredients[i].strMeal}</h3>
                      </div>
                  </div>
              </div>

        `
      }
      rowData.innerHTML = cartona;


  }

  function showSearchInputs() {
      console.log("saeed");
      var cartona = '';
      cartona = `<div class="row py-4">
        <div class="col-md-6">
            <input onkeyup="searchByName(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchByFLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    </div>`;
      var bod = document.querySelector('#searchContainer');
      bod.innerHTML = cartona;
  }
  var bod = document.querySelector('#searchContainer');

  let allMealSearch = [];

  async function searchByName(hambozo) {
      if (hambozo === '') {
          removeMeal();
          return;
      }
      console.log(hambozo);
      var result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${hambozo}`);
      var finalresult = await result.json();
      console.log(finalresult);
      allMealSearch = finalresult.meals;
      display8();
  }
  async function searchByFLetter(hambozo) {
      if (hambozo === '') {
          removeMeal();
          return;
      }
      console.log(hambozo);
      var result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${hambozo}`);
      var finalresult = await result.json();
      console.log(finalresult);
      allMealSearch = finalresult.meals;
      display8();
  }


  function display8() {
      var cartona = '';
      for (var i = 0; i < allMealSearch.length; i++) {
          cartona += `
            <div class="col-md-3">
                <div onclick="getMealDetails(${allMealSearch[i].idMeal})" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${allMealSearch[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${allMealSearch[i].strMeal}</h3>
                    </div>
                </div>
            </div>`;
      }
      rowData.innerHTML = cartona;
  }

  function removeMeal() {
      var cartona = '';
      rowData.innerHTML = cartona;
  }

  function removesearc() {
      var cartona = '';
      bod.innerHTML = cartona;
  }

  function showContacts() {
      var cartona = '';
      cartona += `<div class="container w-75 text-center contact">
    <div class="row g-4 ">
        <div class="col-md-6">
            <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
            <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                Special characters and numbers not allowed
            </div>
        </div>
        <div class="col-md-6">
            <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
            <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                Email not valid *exemple@yyy.zzz
            </div>
        </div>
        <div class="col-md-6">
            <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
            <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                Enter valid Phone Number
            </div>
        </div>
        <div class="col-md-6">
            <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
            <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                Enter valid age
            </div>
        </div>
        <div class="col-md-6">
            <input id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
            <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                Enter valid password *Minimum eight characters, at least one letter and one number:*
            </div>
        </div>
        <div class="col-md-6">
            <input id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
            <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                Enter valid repassword
            </div>
        </div>
    </div>
    <button id="submitBtn" class="btn btn-outline-danger px-2 mt-3" onclick="handleSubmit()">Submit</button>
</div>`;
      rowData.innerHTML = cartona;

      // Initialize input elements after rendering
      nameInput = document.getElementById('nameInput');
      emailInput = document.getElementById('emailInput');
      phoneInput = document.getElementById('phoneInput');
      ageInput = document.getElementById('ageInput');
      passwordInput = document.getElementById('passwordInput');
      repasswordInput = document.getElementById('repasswordInput');

      // Disable the submit button initially
      document.getElementById('submitBtn').disabled = true;
  }

  let nameInput, emailInput, phoneInput, ageInput, passwordInput, repasswordInput;

  function inputsValidation() {
      let nameValid = validateName();
      let emailValid = validateEmail();
      let phoneValid = validatePhone();
      let ageValid = validateAge();
      let passwordValid = validatePassword();
      let repasswordValid = validateRepassword();

      let submitBtn = document.getElementById('submitBtn');
      if (nameValid && emailValid && phoneValid && ageValid && passwordValid && repasswordValid) {
          submitBtn.disabled = false;
      } else {
          submitBtn.disabled = true;
      }
  }

  function validateName() {
      let nameAlert = document.getElementById('nameAlert');
      let regex = /^[a-zA-Z ]+$/;
      if (regex.test(nameInput.value)) {
          nameAlert.classList.add('d-none');
          return true;
      } else {
          nameAlert.classList.remove('d-none');
          return false;
      }
  }

  function validateEmail() {
      let emailAlert = document.getElementById('emailAlert');
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (regex.test(emailInput.value)) {
          emailAlert.classList.add('d-none');
          return true;
      } else {
          emailAlert.classList.remove('d-none');
          return false;
      }
  }

  function validatePhone() {
      let phoneAlert = document.getElementById('phoneAlert');
      let regex = /^[0-9]{10,15}$/;
      if (regex.test(phoneInput.value)) {
          phoneAlert.classList.add('d-none');
          return true;
      } else {
          phoneAlert.classList.remove('d-none');
          return false;
      }
  }

  function validateAge() {
      let ageAlert = document.getElementById('ageAlert');
      let age = parseInt(ageInput.value);
      if (age >= 1 && age <= 100) {
          ageAlert.classList.add('d-none');
          return true;
      } else {
          ageAlert.classList.remove('d-none');
          return false;
      }
  }

  function validatePassword() {
      let passwordAlert = document.getElementById('passwordAlert');
      let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (regex.test(passwordInput.value)) {
          passwordAlert.classList.add('d-none');
          return true;
      } else {
          passwordAlert.classList.remove('d-none');
          return false;
      }
  }

  function validateRepassword() {
      let repasswordAlert = document.getElementById('repasswordAlert');
      if (repasswordInput.value === passwordInput.value) {
          repasswordAlert.classList.add('d-none');
          return true;
      } else {
          repasswordAlert.classList.remove('d-none');
          return false;
      }
  }

  function removeValue() {
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
      ageInput.value = '';
      passwordInput.value = '';
      repasswordInput.value = '';
  }

  function handleSubmit() {
      removeValue();
      document.getElementById('submitBtn').disabled = true;
  }

  document.addEventListener('DOMContentLoaded', () => {
      showContacts();
  })