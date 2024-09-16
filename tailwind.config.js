/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        myspecial: "#fff",
        foodname: "#615b54",
        pricetag: "#e7ad48",
        cartbg: "#f3f3f3",
      },
      borderColor: {
        cartbg: "#f1f1f1",
      },
      fontFamily: {
        roboto: "Roboto",
        NanumGothic: "Nanum Gothic",
        Satisfy: "Satisfy",
      },
    },
  },
  plugins: [],
};
