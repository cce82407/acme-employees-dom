

const app = document.querySelector("#app")

const state = {
    employees:
    [ 
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'},
    { id: 4, name: 'shep'},
    { id: 3, name: 'curly'},
    { id: 5, name: 'groucho'},
    { id: 6, name: 'harpo'},
    { id: 8, name: 'shep Jr.'},
    { id: 99, name: 'lucy'}
  ]};

const createHeader = () => {
    const header = document.createElement('h1')
    header.innerText = 'Acme Employees DOM'
    header.classList.add('header')
    return header
}


const createEmployeeCard =(name,id) => {
    const employeeCard = document.createElement('div')
    employeeCard.innerText = name
    employeeCard.setAttribute('id', id)
    employeeCard.classList.add('employeeCard')
    employeeCard.addEventListener('click', (ev)=> {
        ev.target.isFavorite = !ev.target.isFavorite
    })
    return employeeCard
}




const render = () => {
app.innerHTML = ''
app.append(createHeader())
const employeeContainer = document.createElement('div')
app.append(employeeContainer)
state.employees.forEach(x => x.isFavorite = false)
state.employees.forEach(x => {employeeContainer.append(createEmployeeCard(x.name, x.id))})
console.log(state)
}

render()