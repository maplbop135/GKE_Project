import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Mycalendar(){
    const events = [
        { title: 'Meeting', start: new Date() }
    ]

    function renderEventContent(eventInfo) {
        return (
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        )
      }

    return (<>
        <div>
            <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            weekends={true}
            events={events}
            eventContent={renderEventContent}
            />
        </div>
    </>);
}

