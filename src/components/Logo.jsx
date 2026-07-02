const LOGO_URL = import.meta.env.BASE_URL + "images/logo.png";

const sizes = {
  sm: { width: 75 },
  md: { width: 115 },
  lg: { width: 155 }
};

export default function Logo({ theme = "dark", size = "md" }) {
  const { width } = sizes[size] || sizes.md;

  return (
    <img src={LOGO_URL}

    alt="Longhorn Lighting & Electrical"
    style={{
      width,
      height: "auto",
      // Invert to white on dark backgrounds, keep natural on light
      filter: "none",
      display: "block"
    }} />);


}
