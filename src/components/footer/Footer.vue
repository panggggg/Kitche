<template>
<div class="footer">
  <v-footer
    dark
    padless
    style="backgroung-color: #8A736C"
  >
    <v-card
      flat
      tile
      class="white--text text-center"
    >
    <!-- <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    

    
    <div>
      <a href="" class="me-4 text-reset">
        <b-icon icon="facebook"  font-scale="3"></b-icon>
      </a>
      <a href="" class="me-4 text-reset">
        <b-icon icon="twitter"  font-scale="3"></b-icon>
      </a>
      <a href="" class="me-4 text-reset">
      <b-icon icon="google"  font-scale="3"></b-icon>

      </a>
      <a href="" class="me-4 text-reset">
         <b-icon icon="instagram"  font-scale="3"></b-icon>    
      </a> 
    </div>
    
  </section> -->


<section class="-flex justify-content-center justify-content-lg-between p-1 border-bottom" 
  >
    <div class="container text-center text-md-start mt-5" >
      <!-- Grid row -->
      <div class="row mt-3" >
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4" style="font-family: Athiti">
            <i class="fas fa-gem me-3"></i>Kitche
          </h6>
          <p style="font-family: Athiti">
            เว็บไซต์สำหรับการค้นหาสูตรอาหารที่คุณสนใจ
            คุณสามารถค้นหาสูตรอาหารมากมายได้ที่นี่ และ คุณสามารถติดตามข่าวสารของพวกเราได้ทาง Social-Media ของเรา 
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <!-- <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">สูตรอาหาร</a>
          </p>
          <p>
            <a href="#!" class="text-reset">สูตรของว่าง</a>
          </p>
          <p>
            <a href="#!" class="text-reset">สูตรขนมหวาน</a>
          </p>
          <p>
            <a href="#!" class="text-reset">สูตรเครื่องดื่ม</a>
          </p>
        </div> -->
        <!-- Grid column -->

        <!-- Grid column -->
        <!-- <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Hot-Menu
          </h6>
          <p>
            <a href="#!" class="text-reset">ต้มยำกุ้ง</a>
          </p>
          <p>
            <a href="#!" class="text-reset">ขนมปังชีส</a>
          </p>
          <p>
            <a href="#!" class="text-reset">บิงซูช็อคเกอแลต</a>
          </p>
          <p>
            <a href="#!" class="text-reset">น้ำแตงโมปั่น</a>
          </p>
        </div> -->
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style="font-family: Athiti">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> Chonburi, CH 20000, TH</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            Kitche@ggg.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
      <v-card-text>
        
       ©
      
   
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text " style="font-family: Athiti">
        {{ new Date().getFullYear() }} Copyrigh — <strong class="text-center">Kitche</strong>
      </v-card-text>
    </v-card>
 
  </v-footer>
  
</div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.footer{
  background-color:  #8A736C;
  font-family: 'Dancing Script';
}