<template>

</template>

<script>
function pruneCacheEntry(cache, key, keys) {

}

function pruneCache(param, param2) {

}

function matches(val, name) {

}

function getFirstComponentChild(slot) {
  return undefined;
}

function getComponentName(componentOptions) {
  return undefined;
}

function remove(keys, key) {

}

export default {
    name:'keep-alive',
    abstract: true, // Abstract component properties, which will be ignored when the component instance establishes a parent-child relationship, which occurs in the process of initLifecycle
    props:{
      include:patternTypes, // Cached component
      exclude:patternTypes, // Uncached components
      max: [String, Number] // Specify cache size
    },
    created() {

      this.cache = Object.create(null);

      this.keys = []; // Cached VNode key

    },



    destroyed() {

      for (const key in this.cache) {

        // Delete all cache

        pruneCacheEntry(this.cache, key, this.keys);

      }

    },



    mounted() {

      // monitor cache/do not cache components

      this.$watch("include", val => {

        pruneCache(this, name => matches(val, name));

      });

      this.$watch("exclude", val => {

        pruneCache(this, name => !matches(val, name));

      });

    },



    render() {

      // Get the vnode of the first child element

      const slot = this.$slots.default;

      const vnode = getFirstComponentChild(slot);

      const componentOptions =

          vnode && vnode.componentOptions;

      if (componentOptions) {

        // The name is not in inlcude or in exlude and returns to vnode directly

        // check pattern

        const name = getComponentName(componentOptions);

        const { include, exclude } = this;

        if (

            // not included

            (include && (!name || !matches(include, name))) ||

            // excluded

            (exclude && name && matches(exclude, name))

        ) {

          return vnode;

        }



        const { cache, keys } = this;

        // Get the key, first get the name field of the component, otherwise it is the tag of the component.

        const key =

            vnode.key == null

                ? // same constructor may get registered as different local components

                // so cid alone is not enough (#3269)

                componentOptions.Ctor.cid +

                (componentOptions.tag ? `::${componentOptions.tag}` : "")

                : vnode.key;

        // Hit the cache, take the vnode component instance directly from the cache, and re-adjust the order of the keys and put it at the last

        if (cache[key]) {

          vnode.componentInstance = cache[key].componentInstance;

          // make current key freshest

          remove(keys, key);

          keys.push(key);

        }

        // Do not hit the cache, set vnode into the cache

        else {

          cache[key] = vnode;

          keys.push(key);

          // prune oldest entry

          //If max is configured and the length of the cache exceeds this.max, delete the first one from the cache

          if (this.max && keys.length > parseInt(this.max)) {

            pruneCacheEntry(cache, keys[0], keys, this._vnode);

          }

        }

        // keepAlive flag

        vnode.data.keepAlive = true;

      }

      return vnode || (slot && slot[0]);

    }
  }
</script>

<style lang="scss">

</style>
