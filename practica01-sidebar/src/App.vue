<script setup>

</script>

<template>
  <div id="app container">
         <!-- navbar -->
      <div>
        <b-navbar variant="dark" type="dark" class="navbar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_prTAY4Bqcvz7rLdyA9guKg1oFxoGrXvW3Q&usqp=CAU"
            class="d-inline-block align-top"
            alt="Kitten"
            height="60"
            width="60"
          />
          <b-navbar-brand href="#"> BootstrapVue </b-navbar-brand>

          <b-navbar-nav>
            <b-nav-item href="inicio">Inicio</b-nav-item>
            <b-nav-item href="about">About</b-nav-item>
            <b-nav-item href="users">Users</b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </div>

      <!-- sidebar -->
      <div>
         <b-sidebar id="sidebar-1" title="Sidebar" visible no-header-close>
          <b-nav vertical class="pt-5">
            <b-nav-item 
              ><b-link :to="{ name: 'inicio' }">
                Tienda de juguetes
                </b-link>
            </b-nav-item>

            <b-nav-item 
              ><b-link :to="{ name: 'about' }">Tienda de electrodomesticos</b-link>
            </b-nav-item>

            <b-nav-item 
              ><b-link :to="{ name: 'users' }">Tienda para productos del hogar</b-link>
            </b-nav-item>
        </b-nav>
        </b-sidebar>

        
      </div>
    <router-view></router-view>

  </div>
</template>

<style>
.navbar {
  padding: 20px;
}

img {
  margin-right: 10px;
}

#sidebar-1 {
  margin-top: 4.9rem;
  padding-top: 0.7rem;
}

</style>
