// Html Task Element
const tasks = document.querySelector('.task');

// Value Container
const arrTask = []

const inpValue = () => {
    tasks.innerHTML = ''

    const inp = document.querySelector('.inp').value

    const obj = {
        task: inp,
        done: false,
    }

    // Добавление задачи в контейнер значений
    arrTask.push(obj)

    // Очистка инпута
    document.querySelector('.inp').value = ''
    getTask()
}

const getTask = () => {
    arrTask.map(item => createTask(item))
}

const createTask = info => {
   
    let checkboxDiv = document.createElement('div')
    checkboxDiv.classList.add('checkbox')
    let tagP = document.createElement('p')
    tagP.innerText = info.task
    checkboxDiv.append(tagP)
    let status = document.createElement('input')
    status.type = 'checkbox'
    status.onclick = () => tagP.classList.add('textElement')

    checkboxDiv.append(status)
    tasks.append(checkboxDiv)
}

const deleteAll = () => {
 tasks.innerHTML = ''
}


