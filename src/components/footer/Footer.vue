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
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h4 class="text-uppercase fw-bold mb-4 text-center" style="font-family: Athiti;">
            ให้กำลังใจผู้สร้าง
          </h4>
            <b-row>
              <b-col>
            <div id="heart" class="text-center"></div>
              </b-col>
              <b-col style="font-family: Athiti">
                <p>{{$store.getters.getLike}}</p>
              </b-col>
              <b-col style="font-family: Athiti">
                <p>ผู้ถูกใจ</p>
              </b-col>
            </b-row>
            <br>
            <b-row cols="2">
              <b-col class="text-center">
                <b-row>
                  <b-col>
                <button type="button"  style="background-color: #F0526E;
                  color:#FFFFFF;
                  border-radius: 100px;
                  border-color:#F0526E;"
                   @click="incrementLike">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </button>
                  </b-col>
                  <b-col style="font-family: Athiti;">
                    <p>{{$store.getters.getLike}}</p>
                  </b-col>
                </b-row>
              </b-col>
              <b-col class="text-center"> 
                 <b-row>
                  <b-col>
                <button type="button"  style="background-color: #F0526E;
                color:#FFFFFF;
                border-radius: 100px;
                border-color:#F0526E;"
                @click="incrementUnLike">
                  <i class="fas fa-heart-broken" aria-hidden="true" ></i>
                </button>
                  </b-col>
                  <b-col style="font-family: Athiti;">
                    <p>{{$store.getters.getUnLike}}</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            
          
         
        </div>
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
    name: 'Footer',
    methods:{
      incrementLike(){
        return this.$store.commit('incrementLike')
      },
      incrementUnLike(){
        return this.$store.commit('incrementUnLike')
      }
    }
}
</script>

<style>
.footer{
  background-color:  #8A736C;
  font-family: 'Dancing Script';
  color: white;
}

body {
  margin: 0;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

#heart {
  width: 20px;
  height: 20px;
  position: relative;
  background-color: #F0526E;
  animation: move 2s infinite;
}

@keyframes move {
  from {
    transform: rotate(45deg) scale(0, 0);
  }

  to {
    transform: rotate(45deg) scale(1, 1);
  }
}

#heart::before,
#heart::after {
  width: 20px;
  height: 20px;
  content: "";
  border-radius: 50%;
  position: absolute;
  background-color: inherit;
}

#heart::before {
  top: -50%;
  left: 0;
}

#heart::after {
  top: 0;
  left: -50%;
}

</style>