    const app = {
        data() {
            return {
                profilepic :'/images/profile image.jpg',
                name : 'Kritsanapon Rakkiatngam',
                igtag : '@melolonjino',
                description : 'IT Student, UX/UI Designer, Game Designer, and Gamer. DM for work inquires or call to 080 XXX XXXX',
                tag1 : '#IT',
                tag2 : '#UX/UI Designer',
                tag3 : '#Game Designer',
                tag4 : '#Gamer',
                button1 : 'Message',
                button2 : 'Follow',
            }
        },   
    },
    mountApp = Vue.createApp(app).mount('#app')