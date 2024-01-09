import { defineStore } from 'pinia'

export const useBlocksStore = defineStore('blocks', {
    state: () => ({
        blocks: {},
    }),
    actions: {
        setBlocks(nv) {
            this.blocks = nv
        },
    },
    persist: true,
})