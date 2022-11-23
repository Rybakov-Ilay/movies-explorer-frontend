export default function getDuration(movie) {
  const hour = Math.floor(+(movie.duration / 60));
  const min = +(movie.duration % 60);
  return hour === 0 ? (min + "м") : (hour + "ч " + min + "м");
}
