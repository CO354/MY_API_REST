import app from './app';

const PORT = 3001;
app.listen(PORT, () => {
  console.log();
  console.log(`Listening por ${PORT}`);
  console.log(`CTRL + Clique http://localhost:${PORT}`);
});
