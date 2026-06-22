import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "../ui/Button";

export const SignaturePad = () => {
  const ref = useRef<any>();

  return (
    <div className="space-y-3">
      <SignatureCanvas
        ref={ref}
        canvasProps={{
          className: "border rounded w-full h-40 bg-white",
        }}
      />

      <div className="flex gap-2">
        <Button onClick={() => ref.current.clear()}>
          Clear
        </Button>
        <Button variant="primary">
          Save Signature
        </Button>
      </div>
    </div>
  );
};