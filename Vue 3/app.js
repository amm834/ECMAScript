const app = Vue.createApp({
 data() {
  return {
   cards: [
    {
    title: 'Vue',
    link: {
     url: 'vuejs.org',
     image: 'https://vuejs.org/images/logo.png'
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ratione molestiae aperiam autem beatae unde vel. Libero consectetur consequatur iste perferendis, ea numquam, distinctio fuga, quae vitae eligendi debitis vel!'
   },
    {
    title: 'React',
    link: {
     url: 'reactjs.org',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ratione molestiae aperiam autem beatae unde vel. Libero consectetur consequatur iste perferendis, ea numquam, distinctio fuga, quae vitae eligendi debitis vel!'
   },
    {
    title: 'Angular',
    link: {
     url: 'amgular.io',
     image: 'https://angular.io/assets/images/logos/angular/angular.svg'
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ratione molestiae aperiam autem beatae unde vel. Libero consectetur consequatur iste perferendis, ea numquam, distinctio fuga, quae vitae eligendi debitis vel!'
   },
   ]
  };
 }
});
app.component('cards-component',{
 props:['title','link','text'],
 template:`
 <div class="card mt-3" style="width: 18rem;">
  <img :src="link.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">
    {{title}}
    </h5>
    <p class="card-text">
    {{text}}
    </p>
    <a :href="link.url" class="btn btn-primary">Go To {{title}}</a>
  </div>
</div>
 `
})
app.mount('#app');