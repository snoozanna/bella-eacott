import useMediaQuery from "@mui/material/useMediaQuery";

export default function MobMQuery(props) {
  const matches = useMediaQuery("(min-width:768px)");

  return (
    <span>
      {`(min-width:768px) matches: ${matches}`}
      {props.children}
    </span>
  );
}
