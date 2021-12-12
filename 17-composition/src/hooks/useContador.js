import { ref,computed, provide } from "vue";

export function fnUseContador() {
  const contador = ref(0);

  const fnAumentar = () => contador.value++;
  const fnDisminuir = () => contador.value--;

  const color = computed(() => (contador.value < 0 ? "red" : "green"));

  provide("valorContador", contador);
  provide("color", color);

  return { fnAumentar, fnDisminuir };
}
