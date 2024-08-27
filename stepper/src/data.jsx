export const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    component: () => <div>Provide your contect details</div>,
  },
  {
    name: "Shipping Info",
    component: () => <div>Enter your shipping address</div>,
  },
  {
    name: "Payment",
    component: () => <div>Complete payment for your order</div>,
  },
  {
    name: "Delivered",
    component: () => <div>Your order has been delivered</div>,
  },
];
