import {getCalendarDateGrid} from "./utils.js";

const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      month: new Date().getMonth(),
    };
  },

  computed: {
    calendarMonth() {
      let dt = new Date();
      let year = dt.getFullYear();
      return new Date(year, this.month).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
      });
    },

    cells() {
      return getCalendarDateGrid(this.month);
    },
  },
  template: `
    <div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="month--"></button>
          <div>{{ calendarMonth }}</div>
          <button class="rangepicker__selector-control-right" @click="month++"></button>
        </div>
      </div>

      <div class="rangepicker__date-grid">

        <div v-for="cell in cells"
             :class="cell.month===month ? 'rangepicker__cell':'rangepicker__cell rangepicker__cell_inactive'">
          {{ cell.day }}
          <a class="rangepicker__event" v-for="meetup in meetups"
             v-if="new Date(meetup.date).toLocaleDateString()  === new Date(cell.date).toLocaleDateString()">{{ meetup.title }}</a>
        </div>

      </div>
    </div>
    </div>`,
};

export default MeetupsCalendar;
