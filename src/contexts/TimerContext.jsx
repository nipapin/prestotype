import { createContext } from "react";

const TimerContext = createContext({ timeState: {}, setTimeState: () => {} });

export { TimerContext };
