import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleSwitch(props) {
  const [enabled, setEnabled] = useState(props.default || false);

  useEffect(() => {
    props.switch(enabled);
  }, [enabled]);

  return (
    <Switch.Group>
      <div className="flex items-center mb-6">
        <Switch.Label className="mr-4">{props.label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-orange-300" : "bg-rose-300"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
