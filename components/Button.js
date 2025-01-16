
function Button(props) {
  return (
    <div>
        <button className=' bg-mainColor text-white font-sans font-semibold text-xs p-3 mt-5'>{props.name}</button>
    </div>
  );
}

export default Button;
