"use client";

import * as React from "react";
import { FancyTimePicker } from "./fancy-time-picker";

export function FancyTimePickerWrapper() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <FancyTimePicker {...{ date, setDate }} />;
}
