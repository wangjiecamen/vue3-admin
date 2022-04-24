<template>
  <input type="file" multiple />
  <button @click="click">button</button>
  <button @click="click1">click</button>
  {{test1ref}}
  {{testRef}}
  {{JSON.stringify(mergeRef)}}
  {{b.p}}
</template>

<script setup>
import {ref, onMounted, reactive, toRef, computed, toRefs,} from "vue";
import { useMouse } from "../utils/mouse";
import HelloWorld from '../components/HelloWorld.vue'
defineProps(['value'])
const count = ref(2)
const todos = reactive(
    { title: "vue", name: 2 }
)
const testRef=reactive({
  a:1,
  b:2
})
const test1ref=ref({
  c:3,
  d:4
})
const a={p:2}
const b=toRefs(a)
console.log(testRef)
console.log(toRefs(testRef))
const mergeRef=ref({...toRefs(test1ref.value),...toRefs(testRef)})
const click=()=>{
  testRef.a++
  a.p++
  console.log(b.p.value)
}
const click1=()=>{
  Object.assign(testRef,{a:1,b:3,o:8})
}
const obj={
  loading:true,
  setting:122,
  onClick:()=>{}
}
onMounted(() => {
 console.log(toRef(todos,'title').value)

})


</script>
<style>
</style>
