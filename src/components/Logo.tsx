type LogoSize = 'nav' | 'report' | 'footer';

interface LogoProps {
  className?: string;
  size?: LogoSize;
}

const sizeStyles: Record<LogoSize, string> = {
  nav: 'h-9 max-w-[132px]',
  report: 'h-7 max-w-[102px]',
  footer: 'h-10 max-w-[146px]',
};

export default function Logo({ className = '', size = 'nav' }: LogoProps) {
  return (
    <img
      src="/images/Logo_1.png"
      alt="VerifiKa"
      className={`block w-auto shrink-0 object-contain ${sizeStyles[size]} ${className}`}
    />
  );
}
