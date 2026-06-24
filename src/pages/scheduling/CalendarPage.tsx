import React, { useMemo, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import {
  Calendar,
  Clock,
  Users,
  Video,
  Plus,
} from "lucide-react";

import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

import { meetings } from "../../data/meetings";

import { MeetingStats } from "../../components/meetings/MeetingStats";
import { MeetingTimeline } from "../../components/meetings/MeetingTimeline";
import { UpcomingMeetings } from "../../components/meetings/UpcomingMeetings";
import { MeetingFilters } from "../../components/meetings/MeetingFilters";
import { ScheduleMeetingModal } from "../../components/meetings/ScheduleMeetingModal";

export const CalendarPage = () => {
  const [selectedStatus, setSelectedStatus] =
    useState("all");

  const [showModal, setShowModal] =
    useState(false);

  const calendarEvents = useMemo(() => {
    return meetings.map((meeting) => ({
      title: meeting.title,
      start: `${meeting.date}T10:00:00`,
      end: `${meeting.date}T11:00:00`,
    }));
  }, []);

  const filteredMeetings = useMemo(() => {
    if (selectedStatus === "all") {
      return meetings;
    }

    return meetings.filter(
      (meeting) =>
        meeting.status === selectedStatus
    );
  }, [selectedStatus]);

  return (
    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Meetings Hub
          </h1>

          <p className="text-gray-500 mt-1">
            Manage meetings, schedules,
            investors, startups and video calls.
          </p>
        </div>

        <Button
          leftIcon={<Plus size={18} />}
          onClick={() => setShowModal(true)}
        >
          Schedule Meeting
        </Button>
      </div>

      {/* STATS */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <MeetingStats
          title="Total Meetings"
          value={meetings.length}
          icon={<Calendar size={34} />}
        />

        <MeetingStats
          title="Upcoming"
          value={
            meetings.filter(
              (m) =>
                m.status === "confirmed"
            ).length
          }
          icon={<Clock size={34} />}
        />

        <MeetingStats
          title="Participants"
          value="24"
          icon={<Users size={34} />}
        />

        <MeetingStats
          title="Video Calls"
          value="18"
          icon={<Video size={34} />}
        />
      </div>

      {/* FILTER */}

      <Card className="p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">
              Meeting Filters
            </h2>

            <p className="text-sm text-gray-500">
              Filter meetings by status
            </p>
          </div>

          <MeetingFilters
            selectedStatus={
              selectedStatus
            }
            setSelectedStatus={
              setSelectedStatus
            }
          />
        </div>
      </Card>

      {/* UPCOMING */}

      <div>
        <h2 className="text-xl font-bold mb-4">
          Upcoming Meetings
        </h2>

        <UpcomingMeetings
          meetings={filteredMeetings}
        />
      </div>

      {/* CALENDAR */}

      <Card className="p-5">
        <div className="mb-5">
          <h2 className="text-xl font-bold">
            Meeting Calendar
          </h2>

          <p className="text-gray-500">
            Weekly meeting schedule
          </p>
        </div>

        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
          ]}
          initialView="timeGridWeek"
          events={calendarEvents}
          selectable
          editable
          height="700px"
          slotMinTime="08:00:00"
          slotMaxTime="22:00:00"
          allDaySlot={false}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right:
              "dayGridMonth,timeGridWeek,timeGridDay",
          }}
        />
      </Card>

      {/* LOWER SECTION */}

      <div className="grid gap-6 xl:grid-cols-2">

        <MeetingTimeline />

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-5">
            Recent Meeting Notes
          </h2>

          <div className="space-y-4">

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">
                Funding Discussion
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Investor interested in
                reviewing financial
                projections and market
                validation metrics.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">
                Product Demo
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Positive feedback received.
                Requested roadmap and
                customer growth numbers.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">
                Due Diligence
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Documentation approved.
                Moving toward investment
                discussion stage.
              </p>
            </div>

          </div>
        </Card>

      </div>

      {/* MODAL */}

      <ScheduleMeetingModal
        isOpen={showModal}
        onClose={() =>
          setShowModal(false)
        }
      />
    </div>
  );
};