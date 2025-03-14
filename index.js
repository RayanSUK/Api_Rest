const body = document.getElementById("table").querySelector("tbody");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    for (const user of users) {
      const tr = document.createElement("tr");

      const nom = document.createElement("td");
      nom.innerText = user.name;
      tr.appendChild(nom);

      const surnom = document.createElement("td");
      surnom.innerText = user.username;
      tr.appendChild(surnom);

      const mail = document.createElement("td");
      mail.innerText = user.email;
      tr.appendChild(mail);

      const ville = document.createElement("td");
      ville.innerText = user.address.city;
      tr.appendChild(ville);

      body.appendChild(tr);
    }
  });
