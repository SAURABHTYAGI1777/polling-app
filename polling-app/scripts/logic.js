//window (root object (tab))
window.addEventListener('load', bindEvents);
//bindEvents();
function bindEvents(){
    const addButton = document.getElementById('add-question');
    addButton.addEventListener('click', showQuestion );
}
function showQuestion(){
    console.log('Show Question Called...');
    // document (Page)
    const questionDiv = document.getElementById('question');
    questionDiv.style.display = 'block';
}