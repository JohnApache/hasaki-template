import { observable, action, flow, toJS, configure } from "mobx"; 

configure({ enforceActions: "observed" });

class TodoListStore {
    @observable isLoading = false;
    @observable todoList = [];

    @action.bound 
    addItem(item) {
        this.todoList = [
            ...toJS(this.todoList),
            item
        ]
    }

    @action.bound
    deleteItem(index) {
        this.todoList = toJS(this.todoList).filter((_, i) => i !== index);
    }

    @action.bound 
    changeStatus(isLoading) {
        this.isLoading = isLoading;
    };
    
    handleAddItem = flow(function* handleAddItem(item) {
        this.changeStatus(true);
        yield new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
        this.changeStatus(false);
        this.addItem(item);
    })
}

const todoListStore = new TodoListStore();

export default todoListStore;