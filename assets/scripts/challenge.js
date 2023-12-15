// tableau fourni par le challenge
const populations = [
    { id: 0, name: "Alan", jobs : ['dev junior', 'dev fullstack'], password : "tyeedsa00" },
    { id: 1, name: "Albert", jobs : [ 'doctor'], password : "tyeidii00" },
    { id: 2, name: "Jhon" , jobs : ['mathematician', 'doctor'], password : "xyuuuoi00"},
    { id: 3, name: "Brice", jobs : ['dev fullstack'] , password : "xytoiab00"},
    { id: 4, name: "Alexendra", jobs : ['dentist'],  password : "aaaoiab33" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" , jobs : ['lead dev', 'dev fullstack']},
    { id: 7, name: "Dallas" , jobs : [ 'dev fullstack']},
    { id: 8, name: "Dennis", jobs : ['integrator', 'dev fullstack'] },
    { id: 9, name: "Edgar", jobs : ['mathematician'] },
    { id: 10, name: "Erika", jobs : ['computer scientist', 'mathematician'] },
    { id: 11, name: "Isaac", jobs : ['doctor'], password : "Axgkj22Kl" },
    { id: 12, name: "Ian", password : "Axgkj00Kl" },
  ];

/*******************************************************
 * SUJET 1 EXERCICE 1
 *******************************************************/

// compteur de nombre de docteurs
let countDoctor = 0;

for(const person of populations) {
  // on vérifie que la personne a un travail
  if(person.jobs) {
    if(person.jobs.includes("doctor"))
      countDoctor++;
  }
}
console.log("Exercice 1 \nNombre de docteurs : " + countDoctor);

/*******************************************************
 * SUJET 1 EXERCICE 2
 *******************************************************/

// tableau qui contiendra le nom des développeurs FS
const namesFSDev = [];

for(const person of populations) {
  // on  vérifie qu'ils ont bien un job
  if(person.jobs) {
    if(person.jobs.includes("dev fullstack"))
      namesFSDev.push(person.name);
  }
}
console.log("Exercice 2 \nNom des développeurs fullstack: " + namesFSDev);


/*******************************************************
 * SUJET 1 EXERCICE 3
 *******************************************************/

// tableau qui contiendra le nom des sans emplois
const nameJobless = [];

for(const person of populations) {
  //on vérifie que la personne n'a pas de travail
  if(typeof person.jobs == "undefined")
    nameJobless.push(person.name);
}
console.log("Exercice 3 \nNom des sans emplois: " + nameJobless);

/*******************************************************
 * SUJET 1 EXERCICE 4 (facultatif)
 *******************************************************/

const uniqueLetter = [];

for (const person of populations) {
  // on vérifie que la personne ait un mot de passe
  if(person.password){
    const chars = [];
    // on compare chaque lettre du mdp
    for(const ch of person.password){
      // si chars ne contient pas le caractère, alors on le push dans chars
      if(!chars.includes(ch)) 
        chars.push(ch);
    }
    // on va ensuite rentrer ces valeurs dans le tableau uniqueLetter. On va rentrer le nom et le nombre de caractères uniques
    uniqueLetter.push({
      name : person.name,
      numberUniqueChar : chars.length
    });
  }
}
// pour la forme on utilise un console.table
console.table(uniqueLetter);

/*******************************************************
 * SUJET 2 EXERCICE 1
 *******************************************************/

// lien vers api
const url = "https://jsonplaceholder.typicode.com/photos";

// fonction asynchrone
const fetchImages = async () => {
  // on va stocker la réponse du fetch
  const response = await fetch(url);

  // si le site répond, alors on peut y accèder et continuer. Sinon, on throw une erreur
  if (response.ok) {
    const data = await response.json();
    const images = data.map(photo => photo.url);
    
    return images;
  } 
  else {
    throw new Error(response.status);
  }
};

console.log("Exercice 1 Partie 2 en dessous!");
console.log(fetchImages());

/*******************************************************
 * SUJET 2 EXERCICE 2
 *******************************************************/

// fonction asynchrone
const fetchImgMini = async () => {
  // on va stocker la réponse du fetch
  const response = await fetch(url);

  // si le site répond, alors on peut y accèder et continuer. Sinon, on throw une erreur
  if (response.ok) {
    const data = await response.json();
    const images = data.map(photo => {
      return {
        id: photo.id,
        title: photo.title,
        url: photo.thumbnailUrl,
      };
    });
    
    return images;
  } 
  else {
    throw new Error(response.status);
  }
};

const imgMini = fetchImgMini();

for(const i of imgMini) {
  document.write(`
        <div>
          <img src="${i.url}" alt="${i.title}">
          <p>id: ${i.id}</p>
          <p>titre: ${i.title}</p>
        </div>
      `);
}

// *********************  L'exercice 2 ne fonctionne pas...

/*******************************************************
 * SUJET 2 EXERCICE 3 (facultatif)
 *******************************************************/
