function calculateNetSalary(grossSalary) {
    return Math.floor((45*grossSalary)/100);
}

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of salaries) sum += salary;
    return sum;
}

function inputToNumber(elementID) {
    return isNaN(document.getElementById(elementID).value) ? 0 : +document.getElementById(elementID).value;
}

function capitalizeFirstLastName(text1, text2) {
    return capName = text1.charAt(0).toUpperCase() + text1.slice(1) + " " + text2.charAt(0).toUpperCase() + text2.slice(1);
}

function sumSubsetSalaries(allSalaries, start, end) {
    let sum = 0;
    for (let i = start-1; i < end; i++) sum += allSalaries[i];
    return sum;
}

function getHighestSalary(list) {
    return Math.max(...list);
}

function getMatchingPersons(employees, find) {
    return employees.filter(employee => employee.includes(find));
}

function isValideNumber(input) {
    let charList = input.split("");

    for (let char of charList) {
        //console.log(char.charCodeAt(0));
        if ((char.charCodeAt(0) < 48 || char.charCodeAt(0) > 57) && (char.charCodeAt(0) < 43 || char.charCodeAt(0) > 46))
            return false;
    }
    return true;

    /*if (
        typeof +input === 'number'
        && +input!==NaN
        && +input!==Number.NaN
        && +input!==undefined
        && !isNaN(Number(input))
        ) {

            return true;
    }
    else {
        return false;
    }*/
} 

function isValideEmail(text) {
}

document
    .getElementById("compute-gross-salary")
    .addEventListener("click", (e) => {
        e.preventDefault();

        let salary = inputToNumber("gross-salary");

        const rez = document.getElementById("result-gross-salary");
        rez.innerText = calculateNetSalary(salary);
    });

document.getElementById("compute-number-sum")
        .addEventListener("click", (e) => {
            e.preventDefault();
            let input = [];
            
            for (let i = 1; i <= 5; i++) {
                input.push(inputToNumber("number-" + i));
            }
            
            document.getElementById("number-sum").innerText = sumSalaries(input);
        });

document
    .getElementById("compute-salary-index")
    .addEventListener("click", (e) => {
        e.preventDefault();
        let from = inputToNumber("index-1");
        let until = inputToNumber("index-2");

        let salaries = [];
        for (let i = 1; i < 11; i++) {
            let row = document.getElementsByTagName("tr")[i];
            let value = row.getElementsByTagName("td")[1];
            value = value.innerText;
            salaries.push(parseInt(value));
        }

        document.getElementById("result-salary-index").innerText = sumSubsetSalaries(salaries, Math.min(from, until), Math.max(from, until));
    });

document.getElementById("capitalize").addEventListener("click", (e) => {
    e.preventDefault();

    let text1 = document.getElementById("to-capitalize-1").value;
    let text2 = document.getElementById("to-capitalize-2").value;

    document.getElementById("result-to-capitalize").innerText = capitalizeFirstLastName(
        text1,
        text2
    );
});

document
    .getElementById("compute-is-a-number")
    .addEventListener("click", (e) => {
        e.preventDefault();
        let text = document.getElementById("is-a-number").value;
        let rez = document.getElementById("result-is-a-number");

        if (isValideNumber(text)) {
            rez.innerText = "Valid number";
        } else {
            rez.innerText = "Not a number";
        }
    });

document.getElementById("compute-is-email").addEventListener("click", (e) => {
    e.preventDefault();
    let text = document.getElementById("is-email").value;
    let rez = document.getElementById("result-is-email");

    rez.innerText = isValideEmail(text);
});

document.getElementById("compute-find-max").addEventListener("click", (e) => {
    e.preventDefault();
    let list = [];

    for (let i = 1; i < 6; i++) {
        list.push(inputToNumber("find-max-" + i));
    }

    document.getElementById("result-find-max").innerText = getHighestSalary(list);
});

document
    .getElementById("compute-contains-filter")
    .addEventListener("click", (e) => {
        e.preventDefault();

        let list = [];
        let max = document.getElementsByClassName('list-group')[0].children.length
        for (let i = 0; i<max; i++) {
            list.push(document.getElementsByClassName('list-group')[0].children[i].innerText)
        }
        let filtered = getMatchingPersons(
            list,
            document.getElementById("contains-filter").value
        );

        let out = "";
        for (let i = 0; i < filtered.length; i++) {
            out += '<li class="list-group-item">' + filtered[i] + "</li>";
        }

        document.getElementById("contains-output").innerHTML = out;
    });
