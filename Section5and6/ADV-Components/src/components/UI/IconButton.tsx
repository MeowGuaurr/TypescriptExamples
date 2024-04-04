import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type IconButtonProps = {
  icon: ElementType;
  onClick: () => void;
  children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export function IconButton({
  // icon is aliased to Icon because it should be used like a custom component name
  icon: Icon,
  children,
  ...otherProps
}: IconButtonProps) {
  return (
    <button {...otherProps}>
      <span>
        <Icon />
      </span>
      <span>{children}</span>
    </button>
  );
}

// Example Usage:

export function HeartIcon() {
  return <span>❤️</span>;
}

export function Demo() {
  return (
    <IconButton icon={HeartIcon} onClick={() => console.log('Button clicked!')}>
      Like
    </IconButton>
  );
}