<template>
    <Navbar />
    <img class="fixed w-10 h-10 right-5 top-1/4 transform -translate-y-1/2  z-20" src="../assets/images/shopping-cart.png" alt="logo" />

    <div class="general-container mt-0 ">
  <input class="radio" type="radio" name="card" id="card-1" checked />
  <label class="content" for="card-1">
    <span class="icon">
      <i class="fas fa-sun"></i>
    </span>
    <h3 class="card-title">
      Serra da Freita, Vale de Cambra, Portugal
      <span class="subtitle">@hed</span>
    </h3>
  </label>
  <input class="radio" type="radio" name="card" id="card-2" />
  <label class="content" for="card-2">
    <span class="icon">
      <i class="fas fa-cloud-rain"></i>
    </span>
    <h3 class="card-title">
      París, Paris, France
      <span class="subtitle">@lolaguti</span>
    </h3>
  </label>
  <input class="radio" type="radio" name="card" id="card-3" />
  <label class="content" for="card-3">
    <span class="icon">
      <i class="fas fa-cloud-moon"></i>
    </span>
    <h3 class="card-title">
      La Joue du Loup, Le Dévoluy, France
      <span class="subtitle">@quentindrphotography</span>
    </h3>
  </label>
  <input class="radio" type="radio" name="card" id="card-4" />
  <label class="content" for="card-4">
    <span class="icon">
      <i class="fas fa-snowflake"></i>
    </span>
    <h3 class="card-title">
      Jasper National Park, Jasper, Canada
      <span class="subtitle">@punttim</span>
    </h3>
  </label>
  <input class="radio" type="radio" name="card" id="card-5" />
  <label class="content" for="card-5">
    <span class="icon">
      <i class="fas fa-poo-storm"></i>
    </span>
    <h3 class="card-title">
      Sioux Falls, United States
      <span class="subtitle">@eugenetriguba</span>
    </h3>
  </label>
  <input class="radio" type="radio" name="card" id="card-6" />
  <label class="content" for="card-6">
    <span class="icon">
      <i class="fas fa-poo-storm"></i>
    </span>
    <h3 class="card-title">
      Sioux Falls, United States
      <span class="subtitle">@eugenetriguba</span>
    </h3>
  </label>
  
</div>

</template>


<style>



@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap');

:root {
  --dark-blue: #1F4782;
  --dark-gray: #303335;
  --golden: #AB834C;
  --golden-tainoi: #E9BE71;
  --gray: #818C96;
  --white: #FFF;
}

*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}



.general-container {
  display: flex;
  height: 20rem;
  margin: 100px auto;
  max-width: 100%;
  width: 70rem;
  margin-top:0;
}

.radio {
  display: none;
}

.content {
  background: var(--white)
  url('https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  100% / cover no-repeat;
  border-radius: 3rem;
  cursor: pointer;
  flex: 1;
  margin-right: 0.8rem;
  overflow: hidden;
  position: relative;
  transition: all 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.content:hover {
  box-shadow: 0.3rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
}

/* .icon {
  align-items: center;
  background-color: var(--white);
  border-radius: 50%;
  bottom: 1rem;
  color: var(--golden-tainoi);
  display: flex;
  font-size: 1.5rem;
  height: 2.5rem;
  justify-content: center;
  left: 1.1rem;
  position: absolute;
  width: 2.5rem;
} */

.content:nth-of-type(2) {
  background-image: url('https://images.pexels.com/photos/891123/pexels-photo-891123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}

.content:nth-of-type(3) {
  background-image: url('https://images.pexels.com/photos/15698562/pexels-photo-15698562/free-photo-of-golden-leaves-on-tree-branch-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}

.content:nth-of-type(4) {
  background-image: url('https://images.pexels.com/photos/18937716/pexels-photo-18937716/free-photo-of-yellow-leaves-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}

.content:nth-of-type(5) {
  background-image: url('https://images.pexels.com/photos/326015/pexels-photo-326015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}

.content:nth-of-type(6) {
  background-image: url('https://images.pexels.com/photos/4177700/pexels-photo-4177700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  margin-right: 0;
}

.content:nth-of-type(2) .icon {
  color: var(--dark-gray);
}

.content:nth-of-type(3) .icon {
  color: var(--dark-blue);
}

.content:nth-of-type(4) .icon {
  color: var(--gray);
}

.content:nth-of-type(5) .icon {
  color: var(--golden);
}
.content:nth-of-type(6) .icon {
  color: var(--golden);
}

.card-title {
  bottom: 1.2rem;
  color: var(--white);
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  left: 4.5rem;
  line-height: 1.1;
  opacity: 0;
  position: absolute;
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  transform: translateX(2rem);
  transition: 290ms cubic-bezier(0.05, 0.61, 0.41, 0.95) 300ms;
  transition-property: opacity, transform;
  user-select: none;
  white-space: nowrap;
}

.subtitle {
  font-size: 0.9rem;
}

/* Effect */
.radio:checked + .content {
  border-radius: 2rem;
  box-shadow: 0.3rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
  flex: 10;
}

.radio:checked + .content > .card-title {
  opacity: 1;
  transform: translateX(0);
}




/* /// */


</style>




