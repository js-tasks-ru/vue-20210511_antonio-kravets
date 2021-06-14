<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="email" type="email" placeholder="demo@email" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="password" type="password" placeholder="password" class="form-control"/>
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block">Войти</button>
    </div>
    <div class="form__append">
      Нет аккаунта?
      <router-link class="link" to="/register">Зарегистрируйтесь</router-link>
    </div>
  </form>
</template>

<script>
import {login} from '../data';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    handleSubmit() {
      if (!this.email) {
        alert('Требуется ввести Email');
        return;
      }

      if (!this.password) {
        alert('Требуется ввести пароль');
        return;
      }


      login(this.email, this.password)
        .then(
          (res) => {
            if (!res.error) {
              let path = '/';
              alert(res.fullname);

              if (this.$route.query.from) {
                path = this.$route.query.from;
              }
              this.$router.push(path);
            } else {
              alert(res.message);
            }
          })

    }
  },
};
</script>

<style></style>
