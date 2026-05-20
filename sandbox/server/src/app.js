import express from "express";
import morgan from "morgan";
import { v7 as uuid } from "uuid";
import { createService } from "./kubernetes/service.js";
import { createPod } from "./kubernetes/pod.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Sandbox Server is running Properly");
});

app.get("/_status/healthz", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

app.get("/_status/readyz", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

app.post("/api/sandbox/start", async (req, res) => {
  const sandboxId = uuid();

  await createPod(sandboxId);
  await createService(sandboxId);

  res.status(201).json({
    message: "Sandbox environment created successfully",
    sandboxId,
    preview: `${sandboxId}.preview.localhost`,
  });
});

export default app;
