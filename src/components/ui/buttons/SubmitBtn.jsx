const SubmitBtn = ({
  children,
  type = 'button',
  title = '',
  onClick = null,
  dark,
  isValid = true,
}) => {
  return (
    <button
      className={`border border-zinc-400 px-3 py-1 rounded-lg cursor-pointer ${
        !isValid && 'bg-zinc-100'
      } ${dark && 'bg-zinc-900 text-white'}`}
      title={title}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SubmitBtn;
