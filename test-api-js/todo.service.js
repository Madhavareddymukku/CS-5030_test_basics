class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }
    get_todos()
    {
        return this.todos;
    }

    add_todo(todo){
        // add new todo
        this.todos.todo.push(todo);
    }

    delete_todo(id){
        // delete todo using the id
        const todo_object = this.todos.todo.findIndex((obj) => obj.id === id);
        // use splice to delete the object
        this.todos.todo.splice(todo_object, 1);
    }

    update_todo(id, todo){
        // update the todo with the id
        const todo_object = this.todos.todo.findIndex((obj) => obj.id === id);
        // update the object
        this.todos.todo[todo_object] = todo;
    }
}


module.exports= todoservice;