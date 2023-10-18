import { Button } from '@/components/ui/button';

const ButtonPage = () => {
	return (
		<div
			style={{
				padding: '50px',
				display: 'Grid',
				gridTemplateColumns: 'repeat(4, 1fr)',
			}}
		>
			<div className="py-5 px-5 border-b-2"></div>
			<div className="py-5 px-5 border-b-2">Enabledddd</div>
			<div className="py-5 px-5 border-b-2">Pressed</div>
			<div className="py-5 px-5 border-b-2">Disabled</div>
			{/* Primary */}
			<div className="py-5 px-5">Primary</div>
			<div className="py-5 px-5">
				<Button type="button" variant="primary" size="xs">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="primary" size="sm">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="primary" size="md" fullWidth>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="primary" size="lg" fullWidth>
					Button
				</Button>
			</div>
			<div className="py-5 px-5">
				<Button type="button" variant="primary" size="xs">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="primary" size="sm">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="primary" size="md" fullWidth>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="primary" size="lg" fullWidth>
					Button
				</Button>
			</div>
			{/* Primary - disabled */}
			<div className="py-5 px-5">
				<Button type="button" variant="primary" size="xs" disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="primary" size="sm" disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="primary" size="md" fullWidth disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="primary" size="lg" fullWidth disabled>
					Button
				</Button>
			</div>
			{/* Secondary */}
			<div className="py-5 px-5">Secondary</div>
			<div className="py-5 px-5">
				<Button type="button" variant="secondary" size="xs">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="secondary" size="sm">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="secondary" size="md" fullWidth>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="secondary" size="lg" fullWidth>
					Button
				</Button>
			</div>
			<div className="py-5 px-5">
				<Button type="button" variant="secondary" size="xs">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="secondary" size="sm">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="secondary" size="md" fullWidth>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="secondary" size="lg" fullWidth>
					Button
				</Button>
			</div>
			{/* Secondary - disabled */}
			<div className="py-5 px-5">
				<Button type="button" variant="secondary" size="xs" disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="secondary" size="sm" disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="secondary" size="md" fullWidth disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="secondary" size="lg" fullWidth disabled>
					Button
				</Button>
			</div>

			{/* Tertiary */}
			<div className="py-5 px-5">Tertiary</div>
			<div className="py-5 px-5">
				<Button type="button" variant="tertiary" size="xs">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="tertiary" size="sm">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="tertiary" size="md" fullWidth>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="tertiary" size="lg" fullWidth>
					Button
				</Button>
			</div>
			<div className="py-5 px-5">
				<Button type="button" variant="tertiary" size="xs">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="tertiary" size="sm">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="tertiary" size="md" fullWidth>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="tertiary" size="lg" fullWidth>
					Button
				</Button>
			</div>
			{/* Tertiary - disabled */}
			<div className="py-5 px-5">
				<Button type="button" variant="tertiary" size="xs" disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="tertiary" size="sm" disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="tertiary" size="md" fullWidth disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="tertiary" size="lg" fullWidth disabled>
					Button
				</Button>
			</div>

			{/* Destructive */}
			<div className="py-5 px-5">Destructive</div>
			<div className="py-5 px-5">
				<Button type="button" variant="destructive" size="xs">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="destructive" size="sm">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="destructive" size="md" fullWidth>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="destructive" size="lg" fullWidth>
					Button
				</Button>
			</div>
			<div className="py-5 px-5">
				<Button type="button" variant="destructive" size="xs">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="destructive" size="sm">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="destructive" size="md" fullWidth>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="destructive" size="lg" fullWidth>
					Button
				</Button>
			</div>
			{/* Destructive - disabled */}
			<div className="py-5 px-5">
				<Button type="button" variant="destructive" size="xs" disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="destructive" size="sm" disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="destructive" size="md" fullWidth disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="destructive" size="lg" fullWidth disabled>
					Button
				</Button>
			</div>

			{/* Outlined */}
			<div className="py-5 px-5">Outlined</div>
			<div className="py-5 px-5">
				<Button type="button" variant="outlined" size="xs">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="outlined" size="sm">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="outlined" size="md" fullWidth>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="outlined" size="lg" fullWidth>
					Button
				</Button>
			</div>
			<div className="py-5 px-5">
				<Button type="button" variant="outlined" size="xs">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="outlined" size="sm">
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="outlined" size="md" fullWidth>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="outlined" size="lg" fullWidth>
					Button
				</Button>
			</div>
			{/* Outlined - disabled */}
			<div className="py-5 px-5">
				<Button type="button" variant="outlined" size="xs" disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="outlined" size="sm" disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="outlined" size="md" fullWidth disabled>
					Button
				</Button>
				<hr className="block mt-2 border-0" />
				<Button type="button" variant="outlined" size="lg" fullWidth disabled>
					Button
				</Button>
			</div>
		</div>
	);
};
export default ButtonPage;
