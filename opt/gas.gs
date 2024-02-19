const randomInt = (len) => Number(String(Math.floor(Math.random() * (10 ** len))).padStart(len, "0"));
const randomChar = () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".at(Math.floor(Math.random() * 52));
const randomStr = (len) => new Array(len).fill(0).map(randomChar).join("");

const upgrade = async (WARP_CLIENT_ID) => {
  const install_id = randomStr(22);
  UrlFetchApp.fetch(
    `https://api.cloudflareclient.com/v0a${randomInt(3)}/reg`, {
      method: "POST",
      headers: { 'Content-type': "application/json" },
      payload: JSON.stringify({
        key: randomStr(43) + "=",
        install_id: install_id,
        fcm_token: install_id + ":APA91b" + randomStr(134),
        referrer: WARP_CLIENT_ID,
        warp_enabled: false,
        tos: new Date().toISOString().slice(0, -1) + "-03:00",
        type: "Android",
        locale: "es_ES",
      })
    }
  );
};

const main = () => {
  upgrade("your-device-id");
}
