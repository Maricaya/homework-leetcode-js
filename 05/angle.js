function angle(time) {
  const [hourHand, minuteHand] = time.split(':');

  const minute = (min) => {
    return min * (360 / 60)
  }
  const minAngle = minute(minuteHand)

  const hour = (hour) => {
    if (hour > 12) {
      return (hour - 12) * (360 / 12) + minAngle / 12
    }
    return hour * (360 / 12) + minAngle / 12
  }

  const hourAngle = hour(hourHand)

  const angle = Math.abs(hourAngle - minAngle)

  return Math.round(angle > 180 ? 360 - angle : angle)
}

console.log(angle('12:00'));
// 0

console.log(angle('23:30'));
// 165