// const Manager = require('./lib/Manager.js')
// const Engineer = require('./lib/Engineer.js')
// const Intern = require('./lib/Intern.js')
const fs = require('fs');


// template for top of page
const topPage =`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <nav>
        <nav class="nav justify-content-center">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1"></span>
            </div>
        </nav>
    </nav>

    
    <main class="container row mx-auto mt-5">
`

// template for bottom of page
const bottomPage = `
    </main>

    
    <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    

    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>

    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>\
    <script src="index.js"></script>
    </body>
</html>
`
// save funcition 
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Save index.html Success!'))
}
// save index.html to dist directory
function renderHTML(squad) {
    writeToFile('dist/index.html', generateHTMLPage(squad))
}


// render index.html
function generateHTMLPage(members) {
return `
${topPage}
${employeeSquares(members)}
${bottomPage}
`

}
// Render Employee card
function employeeSquares(members) {
    const squares = []
    // iterate over squad
    for(let i=0; i < members.length; i++) {
        const squad = members[i];
        // console.log(squad.getRole())
        switch(squad.getRole()) {
            case 'Manager':
                // const manager = new Manager(squad.name, squad.id, squad.email, squad.officeNumber);
                squares.push(generateManagerSquare(squad))
                break;
            case 'Engineer':
                // const engineer = new Engineer(squad.name, squad.id, squad.email, squad.github);
                squares.push(generateEngineerSquare(squad))
                break;
            case 'Intern':
                // const intern = new Intern(squad.name, squad.id, squad.email, squad.school);
                squares.push(generateInternSquare(squad))
                break;
        }

    }
    // console.log(squares)
    return squares.join(``)
}

// Populate Manager Card
function generateManagerSquare(Manager) {
    return `
    <div class="card m-3 shadow-lg">
        <div class="card-header'>
            <h5 class="card-title">
                ${Manager.getName()}
            </h5>
            <h6 class="card-text">  
                ${Manager.getRole()}
            </h6>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush>
                <li class="list-group-item">ID#: ${Manager.getId()} </li>
                <li class="list-group-item"><a href="mailto:${Manager.getEmail()}">Email:${Manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()} </li>

            </ul>
        </div>
    </div>
    `;
}

// Populate Engineer Card
function generateEngineerSquare(Engineer) {
    return `
    <div class="card m-3 shadow-lg">
        <div class="card-header'>
            <h5 class="card-title">
                ${Engineer.getName()}
            </h5>
            <h6 class="card-text">  
                ${Engineer.getRole()}
            </h6>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush>
                <li class="list-group-item">ID#: ${Engineer.getId()} </li>
                <li class="list-group-item"><a href="mailto:${Engineer.getEmail()}">Email:${Engineer.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${Engineer.getGithub()} </li>

            </ul>
        </div>
    </div>
    `;

}

// Populate Intern Card
function generateInternSquare(Intern) {
    return `
    <div class="card m-3 shadow-lg">
        <div class="card-header'>
            <h5 class="card-title">
                ${Intern.getName()}
            </h5>
            <h6 class="card-text">  
                ${Intern.getRole()}
            </h6>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush>
                <li class="list-group-item">ID#: ${Intern.getId()} </li>
                <li class="list-group-item"><a href="mailto:${Intern.getEmail()}">Email:${Intern.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${Intern.getSchool()} </li>

            </ul>
        </div>
    </div>
    `;

}

module.exports = renderHTML;