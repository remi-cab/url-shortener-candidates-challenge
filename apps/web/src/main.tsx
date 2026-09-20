import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import "./style.css";
import App from "./app.tsx";

createRoot(document.getElementById("app")!).render(<App />);
