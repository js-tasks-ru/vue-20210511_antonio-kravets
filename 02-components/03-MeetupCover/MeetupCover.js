const MeetupCover = {
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },
    link: {
      type: String,
    },
  },

  computed: {
    image() {
      return this.link ? { '--bg-url': `url(${this.link})` } : '';
    },
  },

  template: `
    <div class="meetup-cover"
         :style="image">
    <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
};

export default MeetupCover;
