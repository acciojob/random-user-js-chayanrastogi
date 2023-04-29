const nameElem = document.querySelector('#name');
    const imageElem = document.querySelector('#image');
    const ageButton = document.querySelector('button[data-attr="age"]');
    const emailButton = document.querySelector('button[data-attr="email"]');
    const phoneButton = document.querySelector('button[data-attr="phone"]');
    const infoElem = document.querySelector('#info');
    const getUserButton = document.querySelector('#getUser');
    let user;

    function displayUserInfo(user) {
      const fullName = `${user.name.first} ${user.name.last}`;
      const imageUrl = user.picture.large;
      nameElem.textContent = fullName;
      imageElem.src = imageUrl;
    }

    function displayAdditionalInfo(info) {
      infoElem.textContent = info;
    }

    function clearAdditionalInfo() {
      infoElem.textContent = '';
    }

    function handleAgeButtonClick() {
      const age = user.dob.age;
      displayAdditionalInfo(`${age}`);
    }

    function handleEmailButtonClick() {
      const email = user.email;
      displayAdditionalInfo(`${email}`);
    }

    function handlePhoneButtonClick() {
      const phone = user.phone;
      displayAdditionalInfo(`${phone}`);
    }

    function handleGetUserButtonClick() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          user = data.results[0];
          displayUserInfo(user);
          clearAdditionalInfo();
        });
    }

    ageButton.addEventListener('click', handleAgeButtonClick);
    emailButton.addEventListener('click', handleEmailButtonClick);
    phoneButton.addEventListener('click', handlePhoneButtonClick);
    getUserButton.addEventListener('click', handleGetUserButtonClick);