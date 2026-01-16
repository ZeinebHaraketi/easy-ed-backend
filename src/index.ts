import express, { Request, Response } from "express";
import cors from "cors";

import subjectsRouter from "./routes/subjects";
import usersRouter from "./routes/users";
import classesRouter from "./routes/classes";
import departmentsRouter from "./routes/departments";
import statsRouter from "./routes/stats";
import enrollmentsRouter from "./routes/enrollments";


const PORT = process.env.PORT || 8000;




const app = express();

app.use(express.json());


app.use(
  cors({
    origin: process.env.FRONTEND_URL, // React app URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // allow cookies
  })
);

// app.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Easy-Ed backend is running." });
// });


app.use("/api/subjects", subjectsRouter);
app.use("/api/users", usersRouter);
app.use("/api/classes", classesRouter);
app.use("/api/departments", departmentsRouter);
app.use("/api/stats", statsRouter);
app.use("/api/enrollments", enrollmentsRouter);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
