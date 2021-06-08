<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input type="email" v-model="email" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input type="text" v-model="fullname" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input type="password" v-model="password" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input type="password" v-model="password2" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox"><input type="checkbox" v-model="checked"/> Я согласен с условиями <span></span></label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary">Зарегистрироваться</button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <router-link class="link" to="/login">Войдите</router-link>
    </div>
  </form>
</template>

<script>
import {register} from '../data';


export default {
  name: 'RegisterPage',
  data() {
    return {
      email: null,
      fullname: null,
      password: null,
      password2: null,
      checked: false,

    }
  },
  methods: {
    handleSubmit() {
      if (!this.email) {
        alert('Требуется ввести Email');
        return;
      }
      if (!this.fullname) {
        alert('Требуется ввести полное имя');
        return;
      }
      if (!this.password) {
        alert('Требуется ввести пароль');
        return;
      }

      if (this.password !== this.password2) {
        alert('Пароли не совпадают');
        return;
      }

      if (!this.checked) {
        alert('Требуется согласиться с условиями');
        return;
      }

      register(this.email, this.fullname, this.password)
        .then((res) => {if (!res.error) {
          alert(res.id);
          this.$router.push('/login');}
          alert(res.message);}
        );
    }
  },
};
</script>

<style></style>
