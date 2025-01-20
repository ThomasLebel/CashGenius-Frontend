
function Button(props) {
  return (
    <div>
        <button className=' bg-mainColor text-white font-sans font-semibold text-xs p-4 mt-5 rounded-md'>{props.name}</button>
    </div>
  );
}

export default Button;
