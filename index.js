const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.set(express.static(__dirname, ""));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/student", (req, res) => {
  res.render("student.ejs");
});

app.get("/add-student", (req, res) => {
  res.render("addStudent.ejs");
});

app.get("/course", (req, res) => {
  res.render("course.ejs");
});

app.get("/add-course", (req, res) => {
  res.render("addCourse.ejs");
});

app.get("/content", (req, res) => {
  res.render("content.ejs");
});

app.get("/add-content", (req, res) => {
  res.render("addContent.ejs");
});

app.get("/chapter", (req, res) => {
  res.render("chapter.ejs");
});

app.get("/add-chapter", (req, res) => {
  res.render("addChapter.ejs");
});

app.get("/assesment", (req, res) => {
  res.render("assesment.ejs");
});

app.get("/add-assesment", (req, res) => {
  res.render("addAssesment.ejs");
});

app.get("/quiz", (req, res) => {
  res.render("quiz.ejs");
});

app.get("/add-quiz", (req, res) => {
  res.render("addQuiz.ejs");
});

app.get("/institute", (req, res) => {
  res.render("institute.ejs");
});

app.get("/add-institute", (req, res) => {
  res.render("addInstitute.ejs");
});

app.listen(3000, () => {
  console.log("Server Listening on port 3000");
});
