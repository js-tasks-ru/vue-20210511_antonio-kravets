import MeetupAgendaItem from './MeetupAgendaItem.js';

const MeetupAgenda = {
  name: 'MeetupAgenda',

  components:{
    MeetupAgendaItem,
  },

  props:{
    agenda:{
      type: Array,
      required:true,
    }
  },

  template: `
    <div class="meetup-agenda" >
       <meetup-agenda-item v-for="agendaItem in agenda" v-bind:key="agendaItem.id" :agenda-item="agendaItem"></meetup-agenda-item>

    </div>`,
};

export default MeetupAgenda;
