import app from "./app";

const port = process.env.PORT || 8000;

//Listening to the server
app.listen(port, () => {
  console.log(`Server started successfully at port: ${port}`);
});
