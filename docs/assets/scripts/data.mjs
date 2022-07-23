// Network operator object
const networkOperators = {
  MTN: ["0702", "0703", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906"],
  AIRTEL: ["0701", "0708", "0802", "0808", "0812", "0902", "0907", "0901"],
  '9mobile': ["0809", "0817", "0818", "0908", "0909"],
  GLO: ["0705", "0805", "0807", "0811", "0815", "0905"],
  NTEL: ["0804"],
};

// Months of the year
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export function getNetworkOperators() {
  return networkOperators;
}

export function getMonthsOfTheYear() {
  return monthsOfYear;
}
