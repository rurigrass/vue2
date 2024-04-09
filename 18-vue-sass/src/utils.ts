// import {computed, onMounted, onUnmounted, ref} from "vue"

// export const useDimensions = () => {
//     let windowWidth = ref(window.innerWidth)
//     let windowHeight = ref(window.innerHeight)

//     const resizeHandler = () => {windowWidth.value = Math.min(window.innerWidth, 1280),
//     windowHeight.value = window.innerHeight
//     }

//     onMounted(()=>  window.addEventListener("resize", resizeHandler))
//     onUnmounted(()=>  window.addEventListener("resize", resizeHandler))

//     const width = computed(() => windowWidth.value)
//     const height = computed(() => windowHeight.value)

    
//     return {width, height}
// }

import { computed, onMounted, onUnmounted, ref } from "vue"

export const useDimensions = () => {
    let windowWidth = ref(window.innerWidth)
    let windowHeight = ref(window.innerHeight)

    const resizeHandler = () => {
        windowWidth.value = Math.min(window.innerWidth, 1280)
        windowHeight.value = window.innerHeight
    }

    onMounted(() => window.addEventListener("resize", resizeHandler))
    onUnmounted(() => window.removeEventListener("resize", resizeHandler))

    const width = computed(() => windowWidth.value)
    const height = computed(() => windowHeight.value)

    return { width, height }
}