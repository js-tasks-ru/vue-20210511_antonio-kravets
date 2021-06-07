import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',

  base: '/04-SPA/03-ScrollBehavior',

  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/MeetupsPage'),
    },
    {
      path: '/meetups',
      name: 'meetups',
      component: () => import('../views/MeetupsPage'),
    },
    {
      path: '/meetups/:meetupId(\\d+)',
      name: 'meetup',
      props: true,
      redirect: (to) => ({name: 'meetup.description', params: to.params}),
      meta: {
        showReturnToMeetups: true,
        saveScrollPosition: true,
      },
      component: () => import('../views/MeetupPage'),
      children: [
        {
          path: '',
          alias: 'description',
          name: 'meetup.description',
          props: true,
          component: () => import('../views/MeetupDescriptionPage'),
        },
        {
          path: 'agenda',
          name: 'meetup.agenda',
          props: true,
          component: () => import('../views/MeetupAgendaPage'),
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    const position = {x: 0, y: 0};
    if (to.matched.some((record) => record.meta.saveScrollPosition)) {
      if (!from.matched.some((record) => record.meta.saveScrollPosition)) {
        return position;
      }
      return false;
    }
    if (to.hash) {
      position.selector = to.hash;
      return position;
    }
    return position;
  }
});
