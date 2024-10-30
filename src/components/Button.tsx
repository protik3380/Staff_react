interface Propps {
  children: string;
  color?: "primary" | "secondary" | "dark" | "danger";
  onclick: () => void;
}
export default function Button({
  children,
  color = "primary",
  onclick,
}: Propps) {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onclick}>
        {children}
      </button>
    </>
  );
}
