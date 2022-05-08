<script setup lang="ts">
import { ref, onMounted } from "vue";

// const data = ref([])

const sliderBox = ref(null);
const bt1 = ref(null);
const bt2 = ref(null);
const line = ref(null);
let axis = [];

let max = 0;  // 最大刻度
let min = 0;  // 最小刻度
let minValue = 0;  // 起始位置
let maxValue = 0;  // 结束位置
let isValue = maxValue;  // 当前位置
let step = 30 / 60;  // 步进值

onMounted(() => {
  axis = sliderBox.value.getElementsByClassName("slider-point");  // 获取刻度元素

  max = axis.length - 1;  // 获取最大刻度

  for (let i = 0; i < axis.length; i++) {
    axis[i].style.left = (100 / max)*i + "%";  // 将刻度定位
  }
});


</script>

<template>
  <ul class="slider-box" ref="sliderBox">
    <div class="slider-line slider-move" ref="line"></div>
    <div class="slider-bt1 slider-move" ref="bt1" onmousedown="onButtonDown(event, this)"></div>
    <div class="slider-bt2 slider-move" ref="bt2" onmousedown="onButtonDown(event, this)"></div>
    <li class="slider-point"><span>00:00</span></li>
    <li class="slider-point"><span>01:00</span></li>
    <li class="slider-point"><span>02:00</span></li>
    <li class="slider-point"><span>03:00</span></li>
    <li class="slider-point"><span>04:00</span></li>
    <li class="slider-point"><span>05:00</span></li>
    <li class="slider-point"><span>06:00</span></li>
    <li class="slider-point"><span>07:00</span></li>
    <li class="slider-point"><span>08:00</span></li>
    <li class="slider-point"><span>09:00</span></li>
    <li class="slider-point"><span>10:00</span></li>
    <li class="slider-point"><span>11:00</span></li>
    <li class="slider-point"><span>12:00</span></li>
    <li class="slider-point"><span>13:00</span></li>
    <li class="slider-point"><span>14:00</span></li>
    <li class="slider-point"><span>15:00</span></li>
    <li class="slider-point"><span>16:00</span></li>
    <li class="slider-point"><span>17:00</span></li>
    <li class="slider-point"><span>18:00</span></li>
    <li class="slider-point"><span>19:00</span></li>
    <li class="slider-point"><span>20:00</span></li>
    <li class="slider-point"><span>21:00</span></li>
    <li class="slider-point"><span>22:00</span></li>
    <li class="slider-point"><span>23:00</span></li>
  </ul>
</template>

<style lang="scss">
.slider-box {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 94%;
  height: 10px;
  margin: 100px auto;
  background-color: #e4e7ed;
  cursor: pointer;
  position: relative;
  .slider-point {
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: #ffffff;
    transform: translateX(-50%);
    z-index: 10;
    span {
      position: absolute;
      top: 14px;
      left: -10px;
      font-size: 12px;
    }
  }
  .slider-move {
    height: 14px;
    position: absolute;
    top: -2px;
  }
  .slider-bt1,
  .slider-bt2 {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    user-select: none;
    border: solid 2px #409eff;
    background-color: #ffffff;
    transform: translate(-50%, -17%);
    cursor: grab;
    z-index: 20;
  }
  .slider-line {
    background-color: #409eff;
  }
}
</style>
