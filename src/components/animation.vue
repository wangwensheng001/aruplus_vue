<template>
  <div>
    <div class="css-sqktaj">
          <span
            style="
              display: inherit;
              position: relative;
              font-size: 0px;
              height: 25px;
              width: 25px;
            "
            class="span_ani_box"
          >
            <span></span>
            <span> </span>
            <span
              style="
                width: 8.33333px;
                height: 8.33333px;
                background-color: rgb(54, 215, 183);
                margin: 2px;
                border-radius: 100%;
                transform: translate(0px, -6.25px);
                position: absolute;
                top: 25px;
                left: 100px;
              "
            >
            </span>
            <span
              style="
                width: 8.33333px;
                height: 8.33333px;
                background-color: rgb(54, 215, 183);
                margin: 2px;
                border-radius: 100%;
                transform: translate(0px, -6.25px);
                position: absolute;
                top: 25px;
                left: 100px;
              "
            >
            </span>
            <span
              style="
                width: 8.33333px;
                height: 8.33333px;
                background-color: rgb(54, 215, 183);
                margin: 2px;
                border-radius: 100%;
                transform: translate(0px, -6.25px);
                position: absolute;
                top: 25px;
                left: 100px;
              "
            >
            </span>
            <span
              style="
                width: 8.33333px;
                height: 8.33333px;
                background-color: rgb(54, 215, 183);
                margin: 2px;
                border-radius: 100%;
                transform: translate(0px, -6.25px);
                position: absolute;
                top: 25px;
                left: 100px;
              "
            >
            </span>
          </span>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.css-sqktaj {
  height: 150px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-left: -48px;
}
// 吃豆人动画
@keyframes rotate_pacman_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@keyframes rotate_pacman_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
@keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}
.span_ani_box {
  span:nth-child(1) {
    width: 0px;
    height: 0px;
    border-width: 25px;
    border-style: solid;
    border-color: rgb(54, 215, 183) transparent rgb(54, 215, 183)
      rgb(54, 215, 183);
    border-radius: 25px;
    position: absolute;
    animation: rotate_pacman_up 0.8s 0s infinite;
  }
  span:nth-child(2) {
    width: 0px;
    height: 0px;
    border-width: 25px;
    border-style: solid;
    border-color: rgb(54, 215, 183) transparent rgb(54, 215, 183)
      rgb(54, 215, 183);
    border-radius: 25px;
    position: absolute;
    animation: rotate_pacman_down 0.8s 0s infinite;
  }
  span:nth-child(3) {
    animation: pacman-balls 1s 0.25s infinite linear;
  }
  span:nth-child(4) {
    animation: pacman-balls 1s 0.50s infinite linear;
  }
  span:nth-child(5) {
    animation: pacman-balls 1s 0.75s infinite linear;
  }
  span:nth-child(6) {
    animation: pacman-balls 1s 1s infinite linear;
  }
}
</style>