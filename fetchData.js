let allUsersData = [];

function getUsers(element) {
  fetch("https://randomuser.me/api/?gender=female&results=30")
    .then((response) => response.json())
    .then((data) => {
      allUsersData = data.results;
      const userList = createUserList(allUsersData);
      element.appendChild(userList);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("main");
  getUsers(mainElement);
});

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const mainElement = document.querySelector("main");

  const filterName = allUsersData.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(input);
  });

  console.log(filterName);

  if (filterName.length > 0) {
    mainElement.innerHTML = "";
    const userDiv = createUserList(filterName);
    mainElement.appendChild(userDiv);
  } else {
    console.log("No user found with that name");
  }
  console.log("test");
});

function createUserList(users) {
  const userList = document.createElement("div");

  for (let i = 0; i < users.length; i++) {
    const userDiv = document.createElement("div");

    userDiv.appendChild(createUserNameHeader(users[i]));
    userDiv.appendChild(createUserImage(users[i]));

    userList.appendChild(userDiv);
  }
  return userList;
}

function createUserNameHeader(user) {
  const userHeading = document.createElement("h2");
  userHeading.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
  return userHeading;
}

function createUserImage(user) {
  const userImage = document.createElement("img");
  userImage.src = `${user.picture.thumbnail}`;
  return userImage;
}
