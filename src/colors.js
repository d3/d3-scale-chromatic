export default function(colors) {
  return colors.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
}
