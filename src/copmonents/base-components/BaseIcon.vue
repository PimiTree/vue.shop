<script setup>
import {ICONS} from "@/modules/constants.js";
import {isValidIcon} from "@/scripts/validators.js";

defineProps({
  name: {
    required: true,
    type: String,
    validator: isValidIcon
  }
})

</script>

<template>
  <component :is="ICONS[name]" class="h-5"/>
</template>
