import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
}
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', throttle(onFormSubmit,500));
refs.form.addEventListener('input', evt => {
    if (localStorage.getItem('STORAGE_KEY') === null) {
        formData[evt.target.name] = evt.target.value;
    }
    else 
    localStorage.getItem('STORAGE_KEY', form.elements.message.value)   

})
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('STORAGE_KEY')

}
function initForm() {
    const savedEmail = localStorage.getItem('STORAGE_KEY')
    if (savedEmail) {
        console.log(savedEmail);
        refs.input.value = savedEmail;
        for (const [name,value] of Object.entries(formData)) {
            formElements[name].value=value;
}}
}
try {
  const data = JSON.parse(formData);
} catch (error) {
  console.log(error.name); 
  console.log(error.message); 
}