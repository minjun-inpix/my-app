import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('inline-flex items-center justify-center font-semibold', {
	variants: {
		variant: {
			primary: 'bg-blue-600 text-white active:bg-blue-900 disabled:bg-blue-100',
			secondary:
				'bg-sky-100 text-blue-500 active:bg-blue-200 active:text-blue-800 disabled:bg-zinc-200 disabled:text-blue-300',
			tertiary:
				'bg-zinc-100 text-zinc-900 active:bg-zinc-200 active:text-zinc-950 disabled:bg-zinc-200 disabled:text-zinc-400',
			destructive: 'bg-red-600 text-white active:bg-red-900 disabled:bg-red-100',
			outlined: 'border border-input bg-background active:bg-accent active:text-accent-foreground',
			ghost: 'active:bg-accent active:text-accent-foreground disabled:bg-transparent',
			link: 'text-primary underline-offset-4 active:underline',
		},
		size: {
			xs: 'min-w-52 px-2 py-1.5 h-8 leading-5 rounded-md text-sm min-w-52',
			sm: 'min-w-64 px-3 py-2.5 h-10 leading-5 rounded-lg text-sm min-w-64',
			md: 'min-w-76 px-4 py-3.5 h-12 leading-6 rounded-lg text-lg min-w-76',
			lg: 'min-w-90 px-5 py-4 h-14 leading-6 rounded-xl text-lg min-w-90',
			icon: 'h-10 w-10',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'sm',
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		const Width = fullWidth === true ? 'w-full' : fullWidth === false ? 'w-auto' : '';
		return <Comp className={cn(buttonVariants({ variant, size, className }), Width)} ref={ref} {...props} />;
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
