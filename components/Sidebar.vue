<script lang="ts" setup>
const props = defineProps<{
  list: Array<{ id: string }>
}>();
</script>

<template>
  <div class=" border-2 bg-white px-6 py-8">
    <slot name="header" />

    <template 
      v-for="(item, index) in props.list"
      :key="item.id">
      <slot :item="item" :index="index"/>
    </template>
  </div>
</template>