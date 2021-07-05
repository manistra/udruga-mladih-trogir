<template>
  <div class="typewriter">
    <div
      class="text-gray-400"
      :style="breakWords ? { display: 'table-caption' } : {}"
    >
      {{ textToShow }} <span v-if="showCaret" class="pl-1 border-r-2"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "Home",
  props: {
    startDelay: {
      type: Number,
      default: 300,
    },
    typingDelay: {
      type: Number,
      default: 200,
    },
    text: {
      type: String,
      default: "",
    },
    textList: {
      type: Array as PropType<string[]>,
    },
    breakWords: {
      type: Boolean,
      default: false,
    },
    hideCaretAtEnd: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const textToShow = ref<string>("");
    const showCaret = ref<boolean>(true);

    const type = (textToType: Array<string>) => {
      textToShow.value = "";
      let i = 0;
      const typeLetter = () => {
        setTimeout(() => {
          textToShow.value = textToShow.value + textToType[i];
          if (i == textToType.length - 1) {
            context.emit("finished");
            if (props.hideCaretAtEnd) showCaret.value = false;
          }
          i++;
          if (i < textToType.length) {
            typeLetter();
          }
        }, props.typingDelay);
      };
      typeLetter();
    };

    setTimeout(() => {
      type(Array.from(props.text));
    }, props.startDelay);

    return { textToShow, showCaret };
  },
});
</script>

<style lang="postcss" scoped>
.typewriter span {
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgba(156, 163, 175);
  }
}
</style>
