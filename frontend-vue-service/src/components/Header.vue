<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <img src="@/assets/logo.png" id="icon" alt="User Icon" width="80"/>
      </b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text style="padding-left: 20px; padding-right: 20px;">
            <a href="#">INICIO</a>
          </b-nav-text>
          <b-nav-text style="padding-left: 20px; padding-right: 20px;">
            <a href="#">MARCAS</a>
          </b-nav-text>
          <b-nav-text style="padding-left: 20px; padding-right: 20px;">
            <a href="#">PRODUCTOS</a>
          </b-nav-text>
          <b-nav-text style="padding-left: 20px; padding-right: 20px;">
            <a href="#">CONTACTO</a>
          </b-nav-text>
          <b-nav-text style="padding-left: 20px; padding-right: 20px;">
            <a href="login">USUARIOS</a>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>