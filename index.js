
const monApp = Vue.createApp({
    data() {
        return {
            inputValue: ''
        };
    },

    methods: {
        getInputValue(event){
            this.inputValue = event.target.value;
        }
    }
});

monApp.mount('#app');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               