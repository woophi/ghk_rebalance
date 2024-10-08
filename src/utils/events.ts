declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (e: 'event', action: string) => void;
  }
}
export const sendDataToGA = async (item: string) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbxrAyYoX4OhNQkTHNY-58kSnJmJM4uaO6jmiycC1-8MEZBzTLl8OjZ6xv_cus8zItP8oA/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, button: item, variant: 'variant_1' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
