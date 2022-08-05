// Hint: use setInterval, create a new Promise and measure time with Date.now()

export async function delay(time) {
  const TIME = 500;
  return new Promise((resolve, reject) => {
    if (time <= TIME) {
      resolve(time);
    } else {
      reject(new Error('This time is too much !'));
    }
  });
}

export async function asyncDelay(time) {
  const now = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => resolve(Date.now() - now), time);
  });
}
