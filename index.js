//Solution to Question 1
function InstagramPost(
  handleofauthor,
  content,
  animagelinkpostedbytheauthorofthepost,
  numberofviews,
  numberoflikes
) {
  this.handleofauthor = handleofauthor;
  this.content = content;
  this.animagelinkpostedbytheauthorofthepost =
    animagelinkpostedbytheauthorofthepost;
  this.numberofviews = numberofviews;
  this.numberoflikes = numberoflikes;
}
//Solution to Question 2
const newInstagramPost = new InstagramPost(
  "stutern",
  "testimonial video",
  "stuternImage",
  20,
  45
);
// console.log(newInstagramPost);
const updatedInstagramPost = new InstagramPost(
  "stuternHQ",
  "stutern accelerator flyer",
  "stuternVideo",
  30,
  85
);
// console.log(updatedInstagramPost);

//Solution to Question 3

//first factory function
function createPerson(name, age, location, jambScores) {
  return {
    name: name,
    age: age,
    location: location,
    jambScores: {
      ENG: 70,
      GOVT: 85,
      LIT: 82,
      CRK: 94,
    },
  };
}
const createPerson2 = createPerson("Musa Dawodu", 19, "Lekki, Lagos state", 70);
// console.log(createPerson2);
//second factory function
function createJambScores() {
  return {
    ENG: 70,
    GOVT: 85,
    LIT: 82,
    CRK: 94,
  };
}
// console.log(createJambScores);

//Solution to Question 4

//different ways of cloning an object

// 1.By spreading the values of an object using spread operator
//Example using spread operator
const person = {
  name: "bolanle",
  skinColor: "brown",
  age: 5,
};
const newPerson = { ...person };
// console.log(newPerson);

//2.By using the Object.assign method

//Example using Object.assign method
const person2 = Object.assign({}, person);
// console.log(person2);

//Solution to Question 5
const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};
for (let key in presidentialCandidates)
  console.log(
    presidentialCandidates[key] + "  is the presidential candidate of ",
    key
  );
