const countdown = () => {
  const countDate = new Date("Jul 30, 2021 00:00:00").getTime();
  //   console.log(countDate);
  const now = new Date().getTime();
  //   console.log(now);
  const gap = countDate - now;
  //   console.log(gap);

  // how time work?
  //   const millesecond = 1 / 1000;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //calculate
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor(gap % day) / hour;
  const textMinute = Math.floor(gap % hour) / minute;
  const textSecond = Math.floor(gap % minute) / second;

  document.querySelector(".day").innerText = textDay;
  document.querySelector("hour").innerText = textHour;
  document.querySelector("minute").innerText = textMinute;
  document.querySelector("second").innerText = textSecond;
};

countdown();
