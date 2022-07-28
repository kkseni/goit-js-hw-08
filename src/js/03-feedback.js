import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
}
const STORAGE_KEY = 'feedback-form-state';


refs.form.addEventListener('submit', throttle(onFormSubmit,500));
refs.form.addEventListener('input', evt => {
    let savedData= localStorage.getItem('STORAGE_KEY')
    if (!savedData) {
        savedData = {}
    }
    else
        savedData[evt.target.name] = evt.target.value;
    
    localStorage.setItem('feedback-form-state', JSON.stringify(savedData))   

})
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('STORAGE_KEY')

}
function initForm() {
    let savedEmail = localStorage.getItem('STORAGE_KEY')
    if (savedEmail) {
        savedEmail = JSON.parse(savedData);
        refs.input.value = savedEmail;
        for (const [name,value] of Object.entries(savedData)) {
            formElements[name].value=value;
}}
}
try {
  const data = JSON.parse(savedData);
} catch (error) {
  console.log(error.name); 
  console.log(error.message); 
}