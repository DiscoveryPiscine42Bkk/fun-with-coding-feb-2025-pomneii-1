
document.addEventListener('DOMContentLoaded', function (){
    const ftList = document.getElementById("ft_list");
    const newBtn = document.getElementById("new-btn")

    // load todo from cookie
    loadTodo();
    
    newBtn.addEventListener('click', function() {
        const todoText = prompt("Enter a new TO DO :");

        if (todoText && todoText.trim() !== "") {
            addTodo(todoText);
            saveTodo();
        }
    });


    function addTodo(text) {
        const todoContainer = document.createElement("div");
        todoContainer.className = "todo";
        todoContainer.textContent = text;
        todoContainer.addEventListener('click', function() {
            if (confirm("Do you want to delete this TO Do ?")) {
                ftList.removeChild(todoContainer);
                saveTodo();
            }
        });

        ftList.insertBefore(todoContainer, ftList.firstChild);
    };


    function saveTodo() {
        const todos = [];
        ftList.querySelectorAll(".todo").forEach(todo => {
            todos.push(todo.textContent);
        });

        document.cookie = `todos=${JSON.stringify(todos)}; path=/`;
    }

    function loadTodo() {
        const cookie = document.cookie.split("; ").find(row => row.startsWith("todos="));
        if (cookie) {
            const todos = JSON.parse(cookie.split('=')[1]);
            todos.reverse().forEach(todos => {
                addTodo(todos);
            });
        }
    };
});