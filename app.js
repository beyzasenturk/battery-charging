function chargeBattery() {
  let battery = document.getElementById("battery");
  battery.innerHTML = "&#xf244;";

  setTimeout(() => {
    battery.innerHTML = "&#xf243;";
  }, 500);

  setTimeout(() => {
    battery.innerHTML = "&#xf242;";
  }, 1000);

  setTimeout(() => {
    battery.innerHTML = "&#xf241;";
  }, 1500);

  setTimeout(() => {
    battery.innerHTML = "&#xf240;";
  }, 2000);
}
chargeBattery();

setInterval(chargeBattery, 2500);
// setInterval, chargeBattery fonksiyonu çağrıldıktan sonra başa dönmesi için kullanıldı. 
  