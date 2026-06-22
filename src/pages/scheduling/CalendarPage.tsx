import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Card } from "../../components/ui/Card";

export const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      title: "Investor Meeting",
      start: "2026-06-20T10:00:00",
      end: "2026-06-20T11:00:00",
      type: "meeting",
    },
  ]);

  const handleDateClick = (info: any) => {
    const title = prompt("Meeting Title");
    if (!title) return;

    const startTime = prompt("Start time (HH:MM)", "10:00");
    if (!startTime) return;

    const start = `${info.dateStr}T${startTime}:00`;

    setEvents([
      ...events,
      {
        title,
        start,
        type: "meeting",
      },
    ]);
  };

  const eventContent = (arg: any) => {
    return (
      <div className="px-2 py-1 rounded-lg bg-indigo-500 text-white text-xs shadow-md">
        <div className="font-semibold">{arg.event.title}</div>
        <div className="opacity-80 text-[10px]">
          {arg.timeText}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 bg-gray-50 p-4 rounded-xl">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">
          Calendar Schedule
        </h1>

        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
            + New Event
          </button>
        </div>
      </div>

      {/* CALENDAR */}
      <Card className="p-4 shadow-lg rounded-2xl">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
          ]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          slotMinTime="08:00:00"
          slotMaxTime="22:00:00"
          allDaySlot={false}
          selectable
          editable
          events={events}
          dateClick={handleDateClick}
          eventContent={eventContent}
          height="750px"
        />
      </Card>
    </div>
  );
};