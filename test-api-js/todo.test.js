

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("add_todo", () => {
        todo_service.add_todo({"id":2, "title": "Do something","done":false});
        todo_service.add_todo({"id":3, "title": "Go for a walk","done":false});
        todo_service.add_todo({"id":4, "title": "Revise for exams","done":false});
        todo_service.add_todo({"id":5, "title": "Go to the gym","done":false});
        todo_service.add_todo({"id":6, "title": "Do laundry","done":false});
        expect(todo_service.get_todos().todo.length).toEqual(8);
    });

    // delete todo function test
    test("delete_todo", () => {
        todo_service.delete_todo(6);
        todo_service.delete_todo(2);
        expect(todo_service.get_todos().todo.length).toEqual(6);
    });

    // update todo function test
    test("update_todo", () => {
        todo_service.update_todo(3, {"id":3,"title": "take the dog for a walk", "done": false});
        const todo_index = todo_service.get_todos().todo.findIndex((obj) => obj.id === 3);
        const todo = todo_service.get_todos().todo[todo_index];
        expect(todo.title).toEqual("take the dog for a walk");
    });

    // Write all your test cases here that corresponds to software requirements


});