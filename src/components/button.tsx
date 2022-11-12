interface IButtonProps {
    label: string;
    onClick?: () => void;
}
export function Button({label, onClick} : IButtonProps) {
    return (
        <div className="flex w-auto flex-row rounded-sm hover:border-brand-700 hover:text-brand-700 border-brand-600 border px-4 py-2 items-center cursor-pointer">
            <p className="text-md text-brand-600 ">{label.toUpperCase()}</p>
        </div>
    );
}