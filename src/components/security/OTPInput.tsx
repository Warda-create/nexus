import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const OTPInput: React.FC<Props> = ({
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      maxLength={6}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="123456"
      className="w-full border rounded-lg px-4 py-3 text-center text-xl tracking-widest"
    />
  );
};