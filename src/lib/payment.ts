"use server";

import etomin from "@api/etomin";

interface PaymentData {
  amount: number;
  orderId: string;

  cardData: {
    number: string;
    name: string;
    month: string;
    year: string;
    cvv: string;
  };

  customer: {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    direccion: string;
    direccion2?: string;
    ciudad: string;
    estado: string;
    pais?: string;
    cp: string;
    empresa?: string;
  };

  metadata?: {
    ip?: string;
    deviceId?: string;
    notes?: string;
  };
}


export async function processEtominPayment(
  payment: PaymentData
) {
  try {
    // 1. Autenticación con Etomin
    const authResponse = await etomin.postSignin({
      email: process.env.ETOMIN_USER,
      password: process.env.ETOMIN_PASSWORD,
    });

    const token = authResponse.data?.authToken;

    if (!token) {
      throw new Error("No se pudo obtener el token de Etomin");
    }

    etomin.auth(token);

    // 2. Tokenización de tarjeta
    const tokenResponse = await etomin.postCardTokenizer({
      cardData: {
        cardNumber: payment.cardData.number.replace(/\s/g, ""),
        cardholderName: payment.cardData.name,
        expirationYear: payment.cardData.year,
        expirationMonth: payment.cardData.month,
      },
    });

    const cardToken = tokenResponse.data?.cardNumberToken;

    if (!cardToken) {
      throw new Error("No se pudo tokenizar la tarjeta");
    }

    /*
    |--------------------------------------------------------------------------
    | Customer info
    |--------------------------------------------------------------------------
    */
    const customerFirstName = payment.customer.nombre?.trim() || "N/A";
    const customerLastName = payment.customer.apellido?.trim() || "N/A";

    /*
    |--------------------------------------------------------------------------
    | Sale request
    |--------------------------------------------------------------------------
    */
    // 4. Realizar venta
    const saleResponse = await etomin.postSale({
      amount: payment.amount,
      currency: "484",
      reference: payment.orderId,
      customerInformation: {
        firstName: customerFirstName,
        lastName: customerLastName,
        middleName: "",
        email: payment.customer.email,
        phone1: payment.customer.telefono,
        city: payment.customer.ciudad,
        address1: payment.customer.direccion,
        postalCode: payment.customer.cp,
        state: payment.customer.estado,
        country: payment.customer.pais || "México",
        ip: "0.0.0.0",
      },
      cardData: {
        cardNumberToken: cardToken,
        cvv: payment.cardData.cvv,
      },
    });

    return {
      success: saleResponse.data.status == "APPROVED",
      data: saleResponse.data,
    };
  } catch (error: any) {
    const errorDetail =
      error?.response?.data ||
      error?.message;

    console.error(
      "❌ Error en pasarela Etomin:",
      errorDetail
    );

    return {
      success: false,
      error:
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Hubo un problema al procesar la transacción.",
      details: errorDetail,
    };
  }
}


/**
 * {
  data: {
    id: '6a5a5b2fd6f4b7ef032d9a59',
    reference: 'MC-1784306477312',
    amount: 142.68,
    customerEmail: 'mrxd9767@gmail.com',
    cardNumber: '411111 **** 1111',
    authorizationNumber: '1010',
    transactionId: '1784306479054',
    responseCode: '00',
    responseMessage: 'Cargo Aprobado',
    status: 'APPROVED',
    mode: 'SANDBOX',
    orderId: 2742201
  },
  status: 200,
  headers: Headers {
    'content-type': 'application/json; charset=utf-8',
    'content-length': '320',
    connection: 'keep-alive',
    date: 'Fri, 17 Jul 2026 16:41:20 GMT',
    'set-cookie': 'sails.sid=s%3ANuS2nRV5-D3uAz-lCQ1bzHnxinY3jsfM.AJ00cVSUdRQelb0trejRZwNB3n6vrBAXOWibs2%2FWg4c; Path=/; Expires=Sat, 18 Jul 2026 16:41:20 GMT; HttpOnly',
    'x-powered-by': 'Sails <sailsjs.com>',
    'access-control-allow-origin': '*',
    'access-control-expose-headers': 'content-type, authorization, x-requested-with',
    etag: 'W/"140-UosqtuF0zsdJDY5HzYO0IVYH89c"',
    vary: 'Accept-Encoding',
    'x-cache': 'Miss from cloudfront',
    via: '1.1 317a02dd1f220db032ed07f7be65d9e0.cloudfront.net (CloudFront)',
    'x-amz-cf-pop': 'QRO51-P7',
    'x-amz-cf-id': 'GxcsAmbSjbgoEq8HUnhHBCrPkOEzRYy7Zg6dZYRoMS0kn8lkV3Jz1w=='
  },
  res: Response {
    status: 200,
    statusText: 'OK',
    headers: Headers {
      'content-type': 'application/json; charset=utf-8',
      'content-length': '320',
      connection: 'keep-alive',
      date: 'Fri, 17 Jul 2026 16:41:20 GMT',
      'set-cookie': 'sails.sid=s%3ANuS2nRV5-D3uAz-lCQ1bzHnxinY3jsfM.AJ00cVSUdRQelb0trejRZwNB3n6vrBAXOWibs2%2FWg4c; Path=/; Expires=Sat, 18 Jul 2026 16:41:20 GMT; HttpOnly',
      'x-powered-by': 'Sails <sailsjs.com>',
      'access-control-allow-origin': '*',
      'access-control-expose-headers': 'content-type, authorization, x-requested-with',
      etag: 'W/"140-UosqtuF0zsdJDY5HzYO0IVYH89c"',
      vary: 'Accept-Encoding',
      'x-cache': 'Miss from cloudfront',
      via: '1.1 317a02dd1f220db032ed07f7be65d9e0.cloudfront.net (CloudFront)',
      'x-amz-cf-pop': 'QRO51-P7',
      'x-amz-cf-id': 'GxcsAmbSjbgoEq8HUnhHBCrPkOEzRYy7Zg6dZYRoMS0kn8lkV3Jz1w=='
    },
    body: ReadableStream { locked: true, state: 'closed', supportsBYOB: true },
    bodyUsed: true,
    ok: true,
    redirected: false,
    type: 'default',
    url: 'https://pagos.etomin.com/api/v1/sale'
  }
}
 */