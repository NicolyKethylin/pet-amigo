function Btn({ text, className }) {
 // If className is not passed, it will be an empty string
 className = className ? className : "";
 // Return a button with the text and className passed as props
 return (
  <input type="submit" value={text} className={className} />
 );
}

export default Btn;