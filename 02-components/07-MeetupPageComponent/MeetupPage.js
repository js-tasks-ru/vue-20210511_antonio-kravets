import MeetupView from './MeetupView.js';
import {MEETUP_ID, fetchMeetup} from './data.js';

const MeetupPage = {
  name: 'MeetupPage',
  components: {
    MeetupView,
  },

  data() {
    return {
      meetup: null,
    };
  },

  async mounted() {
    this.meetup = await fetchMeetup(MEETUP_ID);
  },
  template: `
    <div v-if="meetup">
    <meetup-view :meetup="meetup"></meetup-view>
    </div>`,
};

export default MeetupPage;
