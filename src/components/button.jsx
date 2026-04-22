function Button(props) {
  return (
    <button
      {...props}
      className={`p-2 rounded-md text-white transition-all ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
