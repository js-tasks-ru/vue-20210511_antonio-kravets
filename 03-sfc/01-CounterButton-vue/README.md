# CounterButton.vue

Входной параметр - `count`, которому требуется указать тип и значение по умолчанию.

Это же значение выводится в содержимом кнопки.

При клике кнопка порождает событие `increment` со значением `count + 1`. Важно, что у кнопки нет своего значения, и кнопка не меняет значение входного параметра напрямую. Она лишь сообщает увеличенное значение родителю. Ответственность в передаче ей нового значения — на родителе.

Чтобы использовать это было просто, добавляем `v-model`. Достаточно указать имя параметра и события.

Код компонента никак не изменился после того, как он стал одно-файловым.

Единственное отличие - у компонента исчезает свойство `template`, которое теперь заменяет блок `<template>`.

```html
<template>
  <button type="button" @click="increment">{{ count }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  model: {
    prop: 'count',
    event: 'increment',
  },

  methods: {
    increment() {
      this.$emit('increment', this.count + 1);
    },
  },
};
</script>

<style></style>
```