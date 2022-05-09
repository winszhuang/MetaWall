<script setup lang="ts">
import { ref } from 'vue';
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';

interface Item {
  name: string,
  id: string
}

const emits = defineEmits(['update:value']);
const props = defineProps<{
  value: Item,
  list: Item[]
}>();

const selectedItem = ref(props.value);

watch(selectedItem, (value) => {
  emits('update:value', value);
});
</script>

<template>
  <div>
    <Listbox v-model="selectedItem">
      <div class="h-full">
        <ListboxButton
          class="relative inline-block w-full h-full py-2 pl-4 text-left bg-white border-2 cursor-pointer focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span class="block truncate">{{ selectedItem.name }}</span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute w-full mt-[6px] overflow-auto text-base bg-white border-2 divide-y-2 focus:outline-none max-h-60 ring-1 ring-black ring-opacity-5 sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="item in props.list"
              :key="item.id"
              :value="item"
              as="template"
            >
              <li
                class="cursor-pointer"
                :class="[
                  active ? 'bg-amber-100 text-amber-900 bg-grey-300' : 'text-gray-900',
                  'relative select-none py-2 pl-4 pr-4 font-mono',
                ]"
              >
                <span
                  class="font-mono text-black"
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ item.name }}</span
                >
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>