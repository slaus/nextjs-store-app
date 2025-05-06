import { nanoid } from "nanoid";

//fetcher
export const fetcher = (url) => fetch(url).then((r) => r.json());

export const getFormValidations = () => {
  return {
    name: {
      required: {
        value: true,
        message: "Name is required",
      },
      maxLength: {
        value: 20,
        message: "Max Length 20 chars",
      },
      minLength: {
        value: 3,
        message: "Min Length 3 chars",
      },
      pattern: {
        value: /^[A-Za-zА-Яа-яІіЇїЄє ]{3,20}$/,
        message: "Icorrect Name",
      },
    },
    phone: {
      required: {
        value: true,
        message: "Phone is required",
      },
      maxLength: {
        value: 20,
        message: "Max Length 20 chars",
      },
      minLength: {
        value: 5,
        message: "Min Length 5 chars",
      },
      pattern: {
        value: /^[0-9]{5,20}$/,
        message: "Icorrect Phone",
      },
    },
    address: {
      required: {
        value: true,
        message: "Address is required",
      },
      maxLength: {
        value: 20,
        message: "Max Length 20 chars",
      },
      minLength: {
        value: 5,
        message: "Min Length 5 chars",
      },
      pattern: {
        value: /^[0-9a-zA-ZА-Яа-яІіЇїЄє ]{5,20}$/,
        message: "Icorrect Address",
      },
    },
    city: {
      required: {
        value: true,
        message: "City is required",
      },
      maxLength: {
        value: 20,
        message: "Max Length 20 chars",
      },
      minLength: {
        value: 3,
        message: "Min Length 3 chars",
      },
      pattern: {
        value: /^[A-Za-zА-Яа-яІіЇїЄє ]{3,20}$/,
        message: "Icorrect City",
      },
    },
    schedule: {
      // required: {
      //   value: true,
      //   message: "Schedule is required",
      // },
      maxLength: {
        value: 20,
        message: "Max Length 20 chars",
      },
      pattern: {
        value: /^[0-9a-zA-ZА-Яа-яІіЇїЄє ]{0,20}$/,
        message: "Icorrect Schedule",
      },
    },
    comment: {
      maxLength: {
        value: 30,
        message: "Max Length 30 chars",
      },
    },
  };
};


//wsp url creator
export function getWspUrl(orderData) {
  const N = process.env.NEXT_PUBLIC_MY_PHONE_NUMBER;
  const ID = nanoid(8);
  const { cartItems, subTotal, withDelivery, shippingCost, total, formData } = orderData;
  const { name, phone, address, city, schedule, comment } = formData;

  let cartListforUrl = "";

  {
    Object.values(cartItems).forEach((item) => {
      const itemTotal = (item.offerPrice ? item.offerPrice * item.qty : item.price * item.qty).toFixed(2);
      cartListforUrl += `%0A%0A - *(${item.qty})* ${item.title} --> _*$${itemTotal}*_`;
    });
  }

  const WSP_URL = `https://web.whatsapp.com/send/?phone=${N}&text=%2A${"Order"}%3A%2A%20${ID}%0A%0A%2A${"Client"}%3A%2A%20${name}%0A%0A%2A${"Phone"}%3A%2A%20${phone}%0A%0A%2A${
    withDelivery ? "Address" + "%3A%2A%20" + address + " %0A%0A%2A" : ""
  }${withDelivery ? "City" + "%3A%2A%20" + city + "%0A%0A%2A" : ""}${
    withDelivery ? "Schedule" + "%3A%2A%20" + schedule + "%0A%0A%2A" : ""
  }${comment ? "Comment" + "%3A%2A%20" + comment + "%0A%0A%2A" : ""}${"Items List"}%3A%2A${cartListforUrl}%0A%0A%2A${
    withDelivery ? "Sub Total" + "%3A%2A%20$" + subTotal + " %0A%0A%2A" : ""
  }${withDelivery ? "Delivery Fee" + "%3A%2A%20$" + shippingCost + " %0A%0A%2A" : ""}${"Total"}%3A%2A%20${total}%0A%0A`;

  return WSP_URL;
}


// send order in telegram
export async function sendTelegramOrder(orderData) {
  const BOT_TOKEN = process.env.NEXT_PUBLIC_MY_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_MY_TELEGRAM_CHAT_ID;
  const ID = nanoid(8);
  const { cartItems, subTotal, withDelivery, shippingCost, total, formData } = orderData;
  const { name, phone, address, city, schedule, comment } = formData;

  let cartList = '';
  Object.values(cartItems).forEach((item) => {
    const itemTotal = (item.offerPrice ? item.offerPrice * item.qty : item.price * item.qty).toFixed(2);
    cartList += `\n- (${item.qty}) ${item.title} --> $${itemTotal}`;
  });

  const message = `
🛒 *Order:* ${ID}
👤 *Client:* ${name}
📞 *Phone:* ${phone}
${withDelivery ? `🏠 *Address:* ${address}\n🏙 *City:* ${city}\n🕐 *Schedule:* ${schedule}` : ''}
${comment ? `💬 *Comment:* ${comment}` : ''}
🧾 *Items:* ${cartList}

💰 *Subtotal:* $${subTotal}
🚚 *Delivery Fee:* $${withDelivery ? shippingCost : 0}
💵 *Total:* $${total}
  `;

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'Markdown'
    })
  });
}
