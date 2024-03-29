const randomInt = (len: number) => Number(String(Math.floor(Math.random() * (10 ** len))).padStart(len, "0"));
const randomChar = (): string => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".at(Math.floor(Math.random() * 52));
const randomStr = (len: number) => new Array(len).fill(0).map(randomChar).join("");

export const upgrade = async (WARP_CLIENT_ID: string) => {
  const install_id = randomStr(22);
  return (await fetch(`https://api.cloudflareclient.com/v0a${randomInt(3)}/reg`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "nicefetch/3.1.4",
    },
    body: JSON.stringify({
      key: randomStr(43) + "=",
      install_id: install_id,
      fcm_token: install_id + ":APA91b" + randomStr(134),
      referrer: WARP_CLIENT_ID,
      warp_enabled: false,
      tos: new Date().toISOString().slice(0, -1) + "-03:00",
      type: "Android",
      locale: "es_ES",
    })
  })).ok;
};
