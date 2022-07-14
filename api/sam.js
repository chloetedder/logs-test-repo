export default function (req, res) {
  const { name = 'sam' } = req.query;
  res.send(`Hello ${name}!`);
}

does this break