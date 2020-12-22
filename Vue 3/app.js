const app = Vue.createApp({
 data() {
  return {
   cards: [
    {
    title: 'Vue',
    link: {
     url: 'vuejs.org',
     image: 'vue.png'
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ratione molestiae aperiam autem beatae unde vel. Libero consectetur consequatur iste perferendis, ea numquam, distinctio fuga, quae vitae eligendi debitis vel!'
   },
    {
    title: 'React',
    link: {
     url: 'reactjs.org',
     image: 'react.png'
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ratione molestiae aperiam autem beatae unde vel. Libero consectetur consequatur iste perferendis, ea numquam, distinctio fuga, quae vitae eligendi debitis vel!'
   },
    {
    title: 'Angular',
    link: {
     url: 'amgular.io',
     image: 'angular.png'
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ratione molestiae aperiam autem beatae unde vel. Libero consectetur consequatur iste perferendis, ea numquam, distinctio fuga, quae vitae eligendi debitis vel!'
   },
   ]
  };
 }
});
app.mount('#app');