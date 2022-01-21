import Vue from 'vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
    keyName: 'metaInfo',
    attribute: 'data-vue-meta',
    tagIDKeyName: 'vmid',
    refreshOnceOnNavigation: true
})
