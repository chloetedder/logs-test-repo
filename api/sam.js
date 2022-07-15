export default function (req, res) {
  const { name = 'sam' } = req.query;
  res.send(`Hello ${name}!`);
  console.log('chloe tedder')
}