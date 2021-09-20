const createDiv = (text = '', className = '') => {
    const div = document.createElement('div')
    div.innerText = text
    div.className = className
    return div
}

const render = (element, target) => {
    target.appendChild(element)
}

const App = createDiv('👋 hi there', 'hello')

render(App, document.getElementById('root'))
