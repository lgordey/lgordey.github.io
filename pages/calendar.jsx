import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export default class DemoApp extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: 1000, margin: '0 auto', background: '#fff' }}>
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
          initialDate="2022-04-12"
          navLinks={true}
          editable={true}
          dayMaxEvents={true}
          events={[
            {
              title: 'All Day Event',
              start: '2022-04-01',
            },
            {
              title: 'Long Event',
              start: '2022-04-07',
              end: '2022-04-10'
            },
            {
              groupId: 999,
              title: 'Repeating Event',
              start: '2022-04-09T16:00:00'
            },
            {
              groupId: 999,
              title: 'Repeating Event',
              start: '2022-04-16T16:00:00'
            },
            {
              title: 'Conference',
              start: '2022-04-11',
              end: '2022-04-13'
            },
            {
              title: 'Meeting',
              start: '2022-04-12T10:30:00',
              end: '2022-04-12T12:30:00'
            },
            {
              title: 'Lunch',
              start: '2022-04-12T12:00:00'
            },
            {
              title: 'Meeting',
              start: '2022-04-12T14:30:00'
            },
            {
              title: 'Happy Hour',
              start: '2022-04-12T17:30:00'
            },
            {
              title: 'Dinner',
              start: '2022-04-12T20:00:00'
            },
            {
              title: 'Birthday Party',
              start: '2022-04-13T07:00:00'
            },
            {
              title: 'Click for Google',
              url: 'http://google.com/',
              start: '2022-04-28'
            }
          ]}
        />
      </div>
    )
  }
}