export default class Vue {
    static __patch__: any;

}

function createPatchFunction(param: { nodeOps: any; modules: any }) {
   function patch(oldVnode,vnode,hydrating,removeOnly) {
        // other
       return vnode.elm
   }
   return this.patch() // just for return
}

interface ScopeSlot {
}

interface VNodeDirective {
}

interface VNode {
}

interface Component {
    $el: any;
    $createElement: Function;
    _renderProxy: Function;
    $options: any;
    __patch__($el: any, vnode: VNode, hydrating: boolean, b: boolean): any;
}

export interface VNodeData {
    key?: string | number;
    slot?: string;
    scopedSlots?: { [key: string]: ScopeSlot | undefined };
    ref?: string;
    refInFor?: string;
    tag?: string;
    staticClass?: string;
    class?: any;
    staticStyle?: { [key: string]: any };
    style?: string | object[] | object;
    props?: { [key: string]: any };
    attrs?: { [key: string]: any };
    domProps?: { [key: string]: any };
    hook?: { [key: string]: Function };
    on?: { [key: string]: Function | Function[] };
    nativeOn?: { [key: string]: Function | Function[] };
    transition?: object;
    show?: boolean;
    inlineTemplate?: {
        render: Function,
        staticRenderFns: Function[]
    };
    directives?: VNodeDirective[];
    keepAlive?: boolean;
}


let inBrowser;
let nodeOps;
let modules;


function noop() {

}


function _render(): VNode {
    const vm: Component = this
    const {render, _parentVnode} = vm.$options
    //...
    // render self
    let vnode
    try {
        let currentRenderingInstance; // for ignore error
        currentRenderingInstance = vm
        vnode = render.call(vm._renderProxy, vm.$createElement)
    } catch (e) {
        throw new Error(e)

    }
    return vnode
}

function _update(vnode: VNode, hydrating: boolean) {
    const vm: Component = this;
    // ... others
    let prevNode; // for ignore error
    if (!prevNode) {
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false);
    }
    // other ....
}



export const patch:Function =  createPatchFunction({ nodeOps, modules });

Vue.__patch__ = inBrowser ? patch : noop;




