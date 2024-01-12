<script setup>

</script>

<template>
  <div id="app container">
    <div class="row">
      <!-- sidebar -->
      <div>
        <b-sidebar id="sidebar-1" title="Sidebar" visible no-header-close>
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
          </div>
        </b-sidebar>
      </div>

      <!-- navbar -->
      <div>
        <b-navbar variant="dark" type="dark" class="navbar">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_prTAY4Bqcvz7rLdyA9guKg1oFxoGrXvW3Q&usqp=CAU"
            class="d-inline-block align-top" alt="Kitten" height="60" width="60">
          <b-navbar-brand href="#">
            BootstrapVue
          </b-navbar-brand>

          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#">Link2</b-nav-item>
          </b-navbar-nav>

        </b-navbar>
      </div>
    </div>

    <!-- card -->
    <div class="cd-1">
      <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
        style="max-width: 20rem;" class="mb-2">
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>

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

/* card */
.cd-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>
