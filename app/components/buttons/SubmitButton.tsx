type SubmitButtonProps = {
  light?: boolean;
  label?: string;
  className?: string;
  disabled?: boolean;
  ariaDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  light,
  label,
  className,
  disabled,
  ariaDisabled,
  type,
}) => {
  const themeMode = light
    ? 'bg-white text-black hover:bg-zinc-200'
    : 'bg-dark-gray text-white hover:bg-cool-gray-1';

  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={ariaDisabled}
      className={`h-[48px] font-light flex items-center justify-center px-6 rounded-md ${themeMode} ${className} transition-colors duration-300`}
    >
      {label}
    </button>
  );
};
export default SubmitButton;
