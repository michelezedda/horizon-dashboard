import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { enUS } from "date-fns/locale";
import { useState } from "react";
import DatePicker from "react-datepicker";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import useLocalStorage from "../../localStorage/useLocalStorage";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const DnDCalendar = withDragAndDrop(Calendar);

function MyCalendar() {
  const [storedEvents, setStoredEvents] = useLocalStorage(
    "calendar-events",
    []
  );
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: null,
    end: null,
  });
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");

  const events = Array.isArray(storedEvents)
    ? storedEvents.map((e) => ({
        ...e,
        start: new Date(e.start),
        end: new Date(e.end),
      }))
    : [];

  const getNextId = () =>
    events.length ? Math.max(...events.map((e) => e.id)) + 1 : 1;

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) return;

    const nextId = getNextId();
    const eventToAdd = { ...newEvent, id: nextId };
    setStoredEvents([...events, eventToAdd]);
    setNewEvent({ title: "", start: null, end: null });
  };

  const handleEventDropOrResize = ({ event, start, end }) => {
    const updated = events.map((e) =>
      e.id === event.id ? { ...e, start, end } : e
    );
    setStoredEvents(updated);
  };

  const handleSelectEvent = (event) => {
    if (window.confirm(`Delete event "${event.title}"?`)) {
      setStoredEvents(events.filter((e) => e.id !== event.id));
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-2">Calendar</h1>
      <div className="flex flex-col gap-2 m-2">
        <h2 className="text-xl font-medium">Add new event</h2>
        <input
          type="text"
          placeholder="Add title"
          className="input w-full"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start date"
          className="input w-full"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End date"
          className="input w-full"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
          minDate={newEvent.start}
        />
        <button
          onClick={handleAddEvent}
          disabled={!newEvent.title || !newEvent.start || !newEvent.end}
          className="btn"
        >
          Add event
        </button>
      </div>
      <DnDCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: "100%" }}
        draggableAccessor={() => true}
        resizable
        onEventDrop={handleEventDropOrResize}
        onEventResize={handleEventDropOrResize}
        date={currentDate}
        view={currentView}
        onNavigate={setCurrentDate}
        onView={setCurrentView}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
}

export default MyCalendar;
