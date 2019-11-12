import { observable, action } from 'mobx';

class CounterStore {
    @observable value = 0;

    @action.bound
    addNum(count) {
        this.value += count;
    }

    @action.bound
    subtractNum(count) {
        this.value -= count;
    }
}

const counterStore = new CounterStore();

export default counterStore;