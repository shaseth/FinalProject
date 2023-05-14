
let questions = [
    {
        id: 1,
        question: "Who wrote this in a summary of The Killers by Hemingway? ''The story's themes include the nature of violence and the concept of courage in the face of danger.''",
        answer:"ChatGPT",
        options: [
            "ChatGPT",
            "CliffNotes",
            "A College Student",
            "A College Professor"
        ]   
    },
    {
        id: 2,
        question: "Who wrote this in a summary of The Killers by Hemingway? ''After complaining about the serving schedule, the two men order dinner, joking sarcastically about George and Nick being a couple of dumb country boys.''",
        answer: "CliffNotes",
        options: [
          "ChatGPT",
          "CliffNotes",
          "A College Student",
          "A College Professor"
                  ]
      },
      {
        id: 3,
        question: "Who wrote this in a recipe for Crepes? ''In a blender, puree flour, sugar, salt, milk, eggs, and butter until smooth, about 30 seconds. Refrigerate for 30 minutes or up to 1 day; stir for a few seconds before using.''",
        answer: "Martha Stewart",
        options: [
          "ChatGPT",
          "An old family recipe",
          "Martha Stewart",
          "A College Student"
        ]
      },
      {
        id: 4,
        question: "Who wrote this in a recipe for Crepes? ''In a separate bowl, whisk together the eggs, milk, water, and melted butter.''",
        answer: "ChatGPT",
        options: [
          "ChatGPT",
          "An old family recipe",
          "Martha Stewart",
          "A College Student"
        ]
      },
      {
        id: 5,
        question: "Who wrote this sentence from a short story? ''Francis Macomber was very tall, very well built if you did not mind that length of bone, dark, his hair cropped like an oarsman, rather thin-lipped, and was considered handsome.''",
        answer: "Ernest Hemingway",
        options: [
          "ChatGPT",
          "A College Student",
          "Ernest Hemingway",
          "A monkey with a typewriter"
        ]
      },
      {
        id: 6,
        question: "Who wrote this sentence from a short story? ''He was a tall man, with broad shoulders and a chiseled jawline that spoke to his wealth and power.''",
        answer: "ChatGPT",
        options: [
          "ChatGPT",
          "A College Student",
          "Ernest Hemingway",
          "A monkey with a typewriter"
        ]
      },
      {
        id: 7,
        question: "Who provided me with this collection of 5 random words? ''Hill, Pineapple, Unique, Green, Panther.''",
        answer: "5 College Students",
        options: [
          "ChatGPT",
          "A College Professor",
          "5 College Students",
          "Martha Stewart"
        ]
      },
      {
        id: 8,
        question: "Who provided me with this collection of 5 random words? ''Seahorse, Pencil, Firecracker, Tiramisu, Telescope.''",
        answer: "ChatGPT",
        options: [
          "ChatGPT",
          "A College Professor",
          "5 College Students",
          "Earnest Hemingway"
        ]
      },
      {
        id: 9,
        question: "The key component of a Chatbot is to...?",
        answer: "Predict the next word/sentence",
        options: [
          "Think, feel, and express itself",
          "Write essays",
          "Predict the next word/sentence",
          "None of these"
        ]
      },
      {
        id: 10,
        question: "Do you rock?",
        answer: "I rock!!!",
        options: [
          "I rock!!!",
          "I rock!!!",
          "I rock!!!",
          "I rock!!!"
          
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
    let points = 0;
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 1;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}