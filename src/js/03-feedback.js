import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
}
const STORAGE_KEY = 'feedback-form-state';
refs.form.addEventListener('submit',onFormSubmit);
refs.form.addEventListener('input', throttle( evt => {
    let savedData = localStorage.getItem('STORAGE_KEY')
    if (savedData) {
        savedData = JSON.parse(savedData)
    } else {
        savedData = {}
    }
    savedData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(savedData))   
}),500)
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('STORAGE_KEY')
}
function initForm() {
    let savedEmail = localStorage.getItem('STORAGE_KEY')
    if (savedEmail) {
        savedEmail = JSON.parse(savedData);
        for (const [name, value] of Object.entries(savedData)) {
            refs.form.elements[name].value = value;
        }
    }
}