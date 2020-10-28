export const textStops = (stops) => {
  let text = '';
  if (stops === 1) {
    text = `${stops} пересадка`;
  } else if (stops > 1) {
    text = `${stops} пересадки`;
  } else if (stops === 0) {
    text = `Прямой рейс`;
  }
  return text;
};
