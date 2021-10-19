    const app = {
        data() {
            return {
                msg: 'Hello, Vue3'
            }
        }

    }
    Vue.createApp(app).mount('#app');

    // let elements =document.getElementsByClassName("hover");

    // let changeOnHover = function() {
    //     this.style.color='#17b5be'
    // };
    // let changeOnOut = function() {
    //     this.style.color='black'
    // };

    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].addEventListener('mouseover', changeOnHover);
    //     elements[i].addEventListener('mouseout', changeOnOut);
    // }

    // let elements2 =document.getElementsByClassName("hover2");

    // let changeOnHover2 = function() {
    //     this.style.backgroundColor = '#109198';
    // };
    // let changeOnOut2 = function() {
    //     this.style.backgroundColor = '#17b5be';
    // };

    // for (var i = 0; i < elements2.length; i++) {
    //     elements2[i].addEventListener('mouseover', changeOnHover2);
    //     elements2[i].addEventListener('mouseout', changeOnOut2);
    // }