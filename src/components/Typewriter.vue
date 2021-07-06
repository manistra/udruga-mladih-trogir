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
    typingDelay: {
      type: Number,
      default: 200,
    },
    textList: {
      type: Array as PropType<string[]>,
      default: () => {
        return [];
      },
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
  async setup(props, context) {
    const textToShow = ref<string>("");
    const showCaret = ref<boolean>(true);
    const currentPhrase = ref<number>(0);

    const typePhrase = (textToType: Array<string>, nextPhrase: () => void) => {
      let i = 0;
      const type = (nextPhrase: () => void) => {
        setTimeout(() => {
          textToShow.value = textToShow.value + textToType[i];
          i++;
          if (i == textToType.length) {
            context.emit("finished");
            //current word finished printing
            if (currentPhrase.value == props.textList.length - 1)
              //textList reached end
              currentPhrase.value = 0;
            else currentPhrase.value++;

            if (props.hideCaretAtEnd) showCaret.value = false;
            if (props.textList.length > 1)
              setTimeout(() => {
                deletePhrase(nextPhrase);
              }, 2000);
          } else type(nextPhrase);
        }, props.typingDelay);
      };
      const deletePhrase = (nextPhrase: () => void) => {
        console.log(textToShow.value.length);

        if (textToShow.value.length == 0) nextPhrase();
        setTimeout(() => {
          textToShow.value = textToShow.value.slice(0, -1);
          if (textToShow.value.length != 0) deletePhrase(nextPhrase);
          else {
            nextPhrase();
          }
        }, 90);
      };

      type(nextPhrase);
    };

    const typePhraseList = () => {
      console.log("start");
      typePhrase(
        Array.from(props.textList[currentPhrase.value]),
        typePhraseList
      );
    };

    typePhraseList();

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
