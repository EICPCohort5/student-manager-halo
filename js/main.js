// This is set up as an ECMAScript module, so you can import other ES Modules
const form = document.querySelector('#student-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    // DO NOT actually submit the form
    event.preventDefault();
    let studentData = new FormData(form);
  
    console.log('studentData object:', studentData);
    addStudent(studentData);

  }

  function addStudent(studentData) {
    // let entry = movieData.nextEntry()
    // let key = entry[0]
    // let value = entry[1]
    let studentList = document.querySelector("#student-list");
    let nextStudent = document.createElement("tr");
      
    for (let [key, value] of studentData.entries()) {
      console.log(`${key}: ${value}`); 
      let td = document.createElement("td");
      td.textContent = value;
      nextStudent.appendChild(td);
    }

    studentList.insertAdjacentElement("beforeend", nextStudent);

  }

export{};