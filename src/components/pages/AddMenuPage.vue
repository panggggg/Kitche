<template>
  <div class="container register" style="padding: 100px;">
    <div style="border-radius: 25px;">
    <div class="bgcard " style="border-radius: 25px;">
  <div  class="card-body" style="padding: 30px;">
  <h3 class="text-center" :style="{fontSize: '60px'}">เพิ่มเมนูอาหาร</h3>
  <div class="" :style="{fontSize: '20px'}">
    <b-row class="m-5" cols="2">

        <h3>
        <b-col class="text-left">
            <label for="validationDefault01" class="form-label">ชื่อเมนู</label>
            
            <input type="text" class="form-control" id="validationDefault01" placeholder="กรุณากรอกชื่อเมนู" value="" required>
        </b-col>
        </h3>

        <h3>
        <b-col>
            <label for="validationDefault01" class="form-label">ชื่อผู้เขียน</label>
            <input type="text" class="form-control" id="validationDefault01" placeholder="กรุณากรอกชื่อผู้เขียน" value="" required>
        </b-col>
        </h3>

        <h3>
        <b-col>
            <label for="validationDefault01" class="form-label">วัตถุดิบ</label>
            <textarea v-model="validationDefault01" input type="text" class="form-control" id="validationDefault01" placeholder="กรุณากรอกวัตถุดิบ" value="" required rows="8" cols="31.5"> </textarea>
        </b-col>
        </h3>

        <h3>
        <b-col>
            <label for="validationDefault01" class="form-label">วิธีทำ</label>
            <textarea v-model="validationDefault01" input type="text" class="form-control" id="validationDefault01" placeholder="กรุณากรอกวิธีทำ" value="" required rows="8" cols="31.5"> </textarea>
        </b-col>
        </h3>

        <h3>
        <b-col>
            <label for="validationDefault01" class="form-label">วันที่เพิ่ม</label>
            <!-- <br/> -->
            <input type="date" class="form-control " id="validationDefault01" value="">
            <!-- ปฏิทิน
    <b-calendar
      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
      locale="en"
    ></b-calendar> -->

        </b-col>
        </h3>

        <h3>
        <b-col>
            <label for="validationDefault01" class="form-label">รูปอาหาร</label>

            <!-- Styled -->
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      style="font-size: 20px"
    ></b-form-file>
    <div class="mt-3" style="font-size: 20px">Selected file: {{ file1 ? file1.name : '' }}</div>

        </b-col>
        </h3>
    </b-row>

    <div class="text-center mt-3 mb-3">
        <b-button size="md" class="bt m-2" >ตกลง</b-button>
        <b-button size="md" class="bt m-2" >ยกเลิก</b-button>

        </div>
        
  </div>
  </div></div>
  </div>
  </div>
</template>

<script>
export default {
  name:"AddMenu",
  data() {
    return {
      info: {
        menu: null,
        ingredients: null,
        method: null,
        writer: null,
        file1: null,
      },
      menuInfo: [],
    };
  },
  methods: {
    save() {
      this.menuInfo.push(this.info);
      this.info = {
        menu: null,
        ingredients: null,
        method: null,
        writer: null,
        file1: null,
      };
    },
  },
  
}
</script>
<style>
.bgcard {
  background-color: #8A736C;
  color:#FFFFFF;
}
.bt{ 
  background-color:#695853;
  color: #FFFFFF;
  border-radius: 15px;
  padding: 10px;
}
.bt2{ 
  background-color:#AA575B;
  color:#FFFFFF;
  border-radius: 15px;
  padding: 10px;
}
.register{
    font-family: 'Athiti';
}
</style>