import {ref, onMounted, onUnmounted, unref} from 'vue'

export function useMouse(props) {
    console.log(props)
    console.log("props")
    const x = ref(0)
    const y = ref(0)

    function update(e) {
        x.value = e.pageX
        y.value = e.pageY

    }

    onMounted(() => {
        props.value = 2
        console.log(props.value)
        console.log(111)
        console.log(unref(props))
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        window.addEventListener('mousemove', update)
    })
    return {x, y}
}
