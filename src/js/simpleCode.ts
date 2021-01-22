export default {
    name: "App",
    data() {
        return {
            a: "this is a"
        }
    },
    render(h) {
        h("view",{class:"view",id:"single"})
    }
}
