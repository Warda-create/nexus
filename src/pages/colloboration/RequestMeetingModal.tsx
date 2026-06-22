import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { createCollaborationRequest } from "../../data/collaborationRequests";
import { useAuth } from "../../context/AuthContext";

interface Props {
  entrepreneurId: string;
}

export const RequestMeetingModal = ({
  entrepreneurId,
}: Props) => {
  const { user } = useAuth();

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const submitRequest = () => {
    if (!user) return;

    createCollaborationRequest(
      user.id,
      entrepreneurId,
      message
    );

    alert("Meeting request sent!");

    setMessage("");
    setOpen(false);
  };

  return (
    <>
      <Button
        size="sm"
        variant="secondary"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        Request Meeting
      </Button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[500px]">
            <h2 className="text-xl font-bold mb-4">
              Request Meeting
            </h2>

            <textarea
              className="border w-full p-3 rounded"
              rows={5}
              placeholder="Write a meeting request..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
            />

            <div className="flex gap-3 mt-4">
              <Button onClick={submitRequest}>
                Send Request
              </Button>

              <Button
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};