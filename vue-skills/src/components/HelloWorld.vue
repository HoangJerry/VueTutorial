<template>
  <div  class="container">
    <div class="holder">
      <ValidationObserver ref="observer" tag="form" @submit.prevent ="addSkill"  accept-charset="utf-8">
        <ValidationProvider rules="required|min:5" v-slot="{ errors }">
        <input type="text" name="skills" v-model="skill" placeholder="Enter your skill">
        <transition name="fade">
          <span>{{ errors[0] }}</span>
        </transition>
        </ValidationProvider>
      </ValidationObserver>

      <ul>
        <li v-for="(item, index) in items" v-bind:key="index">
          {{index}}. {{ item.message }}
        </li>
      </ul>
    </div>
    <div :class="{notificate:1==1}">
      <div :style="{backgroundColor:'green', maxWidth:'100%', width:this.items.length*10+'%',height:'30px'}">
        {{alert}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data(){
    return {
      alert:'',
      skill:'', 
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  methods:{
    addSkill() {
      this.$refs.observer.validate().then(isValid=>{
        if (!isValid) {
            this.alert = "Invalid" 
        } else {
          this.items.push({message: this.skill})
          this.skill = ''; 
        }
      });
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./HelloWorld.css" scoped>
</style>
