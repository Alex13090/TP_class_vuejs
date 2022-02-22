
const monApp = Vue.createApp({
    data() {
        return {
            inputValue1: '',
            inputValue2: '',
            view: true
        };
    },

    computed: {
        allClass(){
            if(this.inputValue1 === 'hello'){
                return 'hello';
            }

            if(this.inputValue1 === 'world'){
                return 'world';
            }

            if(this.view == true){
                return 'display';
            }

            if(this.view == false){
                return 'hidden';
            }
        }
    },

    methods: {
        show(){
            this.view = !this.view;
        }
    }

});

monApp.mount('#app');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               